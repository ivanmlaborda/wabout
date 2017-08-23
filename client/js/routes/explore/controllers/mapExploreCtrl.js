/* global angular */
(function () {
  'use strict'

  function mapExploreCtrl ($scope, $rootScope, GeolocateService) {
    // OJO SOLO PARA DESARROLLO FRONT
    $rootScope.logged = true
    console.log('mapExploreCtrl Loaded')
    let mainMarker = {
      lat: 0,
      lng: 0,
      focus: true,
      message: "You're here"
      // draggable: true
    }

    angular.extend($scope, {
      userView: {
        lat: 51.505,
        lng: -0.09,
        zoom: 8
      },
      markers: {
        mainMarker: angular.copy(mainMarker)
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
      })
  }

  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
