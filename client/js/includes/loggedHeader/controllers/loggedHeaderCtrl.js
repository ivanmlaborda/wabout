/* global angular */
(function () {
  'use strict'
  function loggedHeaderCtrl ($scope, AuthService, toastr, $location) {
    $scope.logout = () => {
      AuthService.logout()
      $location.path('/')
    }
  }
  angular
    .module('Wabout')
    .controller('loggedHeaderCtrl', loggedHeaderCtrl)
})()
