/* global angular */
(function () {
  'use strict'
  function loggedHeaderCtrl ($scope, $rootScope, AuthService, toastr, $location) {
    $scope.logout = () => {
      toastr.success(`See you soon ${$rootScope.loggedUser}`)
      AuthService.logout()
      $location.path('/')
    }
  }
  angular
    .module('Wabout')
    .controller('loggedHeaderCtrl', loggedHeaderCtrl)
})()
