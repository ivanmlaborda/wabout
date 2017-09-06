/* global angular */
(function () {
  'use strict'
  function groupsCtrl ($rootScope, toastr, $location, AuthService) {
    if (!AuthService.isLoggedIn()) {
      $location.path('/auth/login')
    }
    const groupsToast = toastr.info('Groups will be available in next release!')

  }
  angular
    .module('Wabout')
    .controller('groupsCtrl', groupsCtrl)
})()
