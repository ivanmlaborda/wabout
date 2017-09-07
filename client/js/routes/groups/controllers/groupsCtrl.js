/* global angular */
(function () {
  'use strict'
  function groupsCtrl ($rootScope, $location, AuthService) {
    if (!AuthService.isLoggedIn()) {
      $location.path('/auth/login')
    }

  }
  angular
    .module('Wabout')
    .controller('groupsCtrl', groupsCtrl)
})()
