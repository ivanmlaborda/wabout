/* global angular */
(function() {
  'use strict'

  function mapExploreCtrl($scope, $rootScope, GeolocateService) {
    // OJO SOLO PARA DESARROLLO FRONT
    $rootScope.logged = true

    $scope.sync = true
    $scope.share = false
    $scope.markers = []

    console.log('mapExploreCtrl Loaded')

    angular.extend($scope, {
      userView: {
        lat: 0,
        lng: 0,
        zoom: 16
      },
      defaults: {
        tileLayer: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png',
        zoomControlPosition: 'topright',
        tileLayerOptions: {
          opacity: 0.9,
          detectRetina: true,
          reuseTiles: true
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

    $scope.addUsersMarkers = function(lat, lng, id) {
      $scope.markers = $scope.markers.filter((userMarker) => {
        return userMarker.id !== id
      })
      $scope.markers.push({
        lat: lat,
        lng: lng,
        id: id,
        focus: false,
        label: {
          message: `${id}`,
          options: {
            // noHide: true
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
            // console.log($scope.userView)
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
            if ($scope.share) {
              socket.emit('userCoords', $scope.userCoords)
            }
            $scope.$apply(() => {
              $scope.addMeMarker($scope.userCoords.lat, $scope.userCoords.lng, $scope.userCoords.id)
            })
          })
      }
    }, 2000)

    const socket = io.connect()
    socket.on('connect', function(data) {
      socket.emit('join', 'Hello World from client')
    })

    socket.on('serverMsg', function(data) {
      console.log(data)
    })

    socket.on('updateCoords', function(data) {
      console.log('Geolocation received from user!')
      $scope.addUsersMarkers(data.lat, data.lng, data.id)
    })

    $scope.shareLocation = () => {
      $scope.sync = true
      $scope.share = true
      console.log('Some users can track you')
    }
    $scope.hideLocation = () => {
      $scope.share = false
      console.log('Any user can track you')
    }
    $scope.syncLocation = () => {
      $scope.sync = true
      console.log('Your position is sync')
    }
    $scope.unSyncLocation = () => {
      $scope.sync = false
      $scope.share = false
      console.log('Your position is not sync. You can not view your position in the map or be tracked by any user')
    }

    $scope.showMarkers = () => {
      console.log($scope.markers)
    }
  }

  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
