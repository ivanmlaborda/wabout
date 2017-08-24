/* global angular */
(function() {
  'use strict'

  function mapExploreCtrl($scope, $rootScope, GeolocateService) {
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
        tileLayer: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        zoomControlPosition: 'topright',
        tileLayerOptions: {
          opacity: 0.9,
          detectRetina: true,
          reuseTiles: true
        }
        // ,scrollWheelZoom: false
      }
    })

    $scope.addMarkers = function (lat, lng) {
      angular.extend($scope, {
        markers: {
          meMarker: {
            lat: lat,
            lng: lng,
            focus: true,
            message: "You're here!"
          }
        }
      })
    }

    GeolocateService.getGeolocation()
      .then(userCoords => {
        $scope.userCoords = userCoords
        $scope.$apply(() => {
          $scope.userView = GeolocateService.getUserView(userCoords, 15)
          console.log($scope.userView)
        })
        angular.extend($scope, {
          userView: $scope.userView
        })
        $scope.addMarkers($scope.userCoords.lat, $scope.userCoords.lng)
      })
  }

  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
