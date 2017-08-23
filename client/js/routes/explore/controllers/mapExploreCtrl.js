/* global angular */
(function () {
  'use strict'

  function mapExploreCtrl ($scope, $rootScope, GeolocateService) {
    // OJO SOLO PARA DESARROLLO FRONT
    $rootScope.logged = true
    console.log('mapExploreCtrl Loaded')

    // Default view
    $scope.userView = {
      'lat': 0,
      'lng': 0,
      'zoom': 18
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
      })
  }

  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
