/* global angular */
(function () {
  'use strict'

  function mapExploreCtrl ($scope, $rootScope, GeolocateService) {
    // OJO SOLO PARA DESARROLLO FRONT
    $rootScope.logged = true
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

    $scope.addMarkers = function (lat, lng) {
      angular.extend($scope, {
        markers: {
          meMarker: {
            lat: lat,
            lng: lng,
            focus: true,
            message: "You're here!",
            icon: {
              iconUrl: '/img/001-signs-1.png',
              iconSize: [48, 48],
              iconAnchor: [24, 48],
              popupAnchor: [0, -48]
            }
          }
        }
      })
    }

    setInterval(() => {
      GeolocateService.getGeolocation()
        .then(userCoords => {
          $scope.userCoords = userCoords
          $scope.$apply(() => {
            $scope.userView = GeolocateService.setUserView(userCoords, $scope.userView.zoom)
            console.log($scope.userView)
          })
          angular.extend($scope, {
            userView: $scope.userView
          })
          $scope.addMarkers($scope.userCoords.lat, $scope.userCoords.lng)
        })
    }, 2000)

    // GeolocateService.getGeolocation()
    //   .then(userCoords => {
    //     $scope.userCoords = userCoords
    //     $scope.$apply(() => {
    //       $scope.userView = GeolocateService.setUserView(userCoords, 15)
    //       console.log($scope.userView)
    //     })
    //     angular.extend($scope, {
    //       userView: $scope.userView
    //     })
    //     $scope.addMarkers($scope.userCoords.lat, $scope.userCoords.lng)
    //   })

    // // TESTING REFRESH SCOPE USER MARKER
    // setInterval(() => {
    //   $scope.$apply(() => {
    //     $scope.markers.meMarker.lat = $scope.markers.meMarker.lat + 0.0005
    //     console.log($scope.markers.meMarker.lat)
    //   })
    // }, 3000)
  }

  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
