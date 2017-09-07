/* global angular */
(function() {
  'use strict'

  function mapExploreCtrl($scope, $rootScope, GeolocateService, DataService, AuthService, $location, toastr) {

    if (!AuthService.isLoggedIn()) {
      $location.path('/auth/login')
    }

    const self = this

    const username = $rootScope.loggedUser

    $scope.userId = ''

    $scope.sync = true
    $scope.share = false
    $scope.markers = []

    DataService.getUserIdByUserName(username)
      .then((userId) => $scope.userId = userId.data._id)
      .then((userId) => socket.emit('setId', userId))

    // SOCKET.IO
    const socket = io.connect()
    socket.on('connect', function(data) {
      socket.emit('join', `New client connection`)
    })

    socket.on('serverMsg', function(data) {
      // console.log(data)
    })

    socket.on('updateCoords', function(coordData) {
      // console.log('Geolocation received from contact!')
      // console.log(coordData)
      $scope.addUsersMarkers(coordData.lat, coordData.lng, coordData.id, coordData.name)
      // console.log(coordData)
    })

    // LEAFLET MAP
    angular.extend($scope, {
      userView: {
        lat: 0,
        lng: 0,
        zoom: 18
      },
      defaults: {
        zoomControlPosition: 'topright',
      },
      layers: {
        baselayers: {
          cartodbLight: {
            name: 'Light',
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png',
            type: 'xyz',
            layerOptions: {
              opacity: 1,
              detectRetina: true,
              reuseTiles: true,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
            }
          },
          cartodbDark: {
            name: 'Dark (Night mode)',
            url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}@2x.png',
            type: 'xyz',
            layerOptions: {
              opacity: 1,
              detectRetina: true,
              reuseTiles: true,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
            }
          },
          stamen: {
            name: 'High Contrast',
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}',
            type: 'xyz',
            layerOptions: {
              opacity: 1,
              ext: 'png',
              detectRetina: true,
              reuseTiles: true,
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }
          },
          satImagery: {
            name: 'Imagery',
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            type: 'xyz',
            layerOptions: {
              opacity: 1,
              detectRetina: true,
              reuseTiles: true,
              attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS'
            }
          }
        },
        overlays: {
          labels : {
            name: 'Labels',
            url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}.{ext}',
            type: 'xyz',
            layerOptions: {
              opacity: 0.7,
              ext: 'png',
              reuseTiles: true,
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }
          }
        }
      }
    })

    $scope.addMeMarker = function(lat, lng) {
      $scope.markers.shift()
      $scope.markers.unshift({
        lat: lat,
        lng: lng,
        id: 'me',
        focus: false,
        // title: 'Me',
        message: 'You are here!',
        label: {
          message: 'Me',
          options: {
            noHide: true
          }
        },
        icon: {
          iconUrl: '/img/red-marker.png',
          iconSize: [34, 48],
          iconAnchor: [17, 48],
          popupAnchor: [0, -48]
        }
      })
    }

    $scope.addUsersMarkers = function(lat, lng, id, name) {
      $scope.markers = $scope.markers.filter((userMarker) => {
        return userMarker.id !== id
      })
      $scope.markers.push({
        lat: lat,
        lng: lng,
        id: id,
        name: name,
        focus: false,
        label: {
          message: `${name}`,
          options: {
            noHide: true
          }
        },
        icon: {
          iconUrl: '/img/blue-marker.png',
          iconSize: [34, 48],
          iconAnchor: [17, 48],
          popupAnchor: [0, -48]
        }
      })
    }

    $scope.centerMe = () => {
      GeolocateService.getGeolocation()
        .then(userCoords => {
          $scope.userCoords = userCoords
          $scope.$apply(() => {
            $scope.userView = GeolocateService.setUserView($scope.userCoords, $scope.userView.zoom)
          })
          angular.extend($scope, {
            userView: $scope.userView
          })
        })
    }
    $scope.centerMe()

    setInterval(() => {
      if ($scope.sync) {
        GeolocateService.getGeolocation()
          .then(userCoords => {
            $scope.userCoords = userCoords
            $scope.userCoords.name = username

            if ($scope.share) {
              socket.emit('userCoords', $scope.userCoords)
            }
            $scope.$apply(() => {
              $scope.addMeMarker($scope.userCoords.lat, $scope.userCoords.lng, $scope.userCoords.id)
            })
          })
      }
    }, 2000)

    self.shareLocation = () => {
      $scope.sync = true
      $scope.share = true
      toastr.info(`Some users can track you ${username}`)
    }
    self.hideLocation = () => {
      $scope.share = false
      toastr.info(`Anyone can track you ${username}`)
    }
    self.syncLocation = () => {
      $scope.sync = true
      toastr.info(`Your positioning is sync`)
    }
    self.unSyncLocation = () => {
      $scope.sync = false
      $scope.share = false
      toastr.info(`Your position is not sync. You can not view your position in the map or be tracked by any user`)
    }

  }

  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
