/* global angular */
(function () {
  'use strict'
  function formLoginCtrl (AuthService, toastr, $location) {
    this.login = (e) => {
      e.preventDefault()
      AuthService.login(this.username, this.password)
      .then(success => {
        if (success) {
          toastr.success('succesfully logged')
          $location.path('/explore')
          $rootScope.loggedUser = username
        } else {
          toastr.error('try again!')
        }
      })
    }



  }

  angular
    .module('Wabout')
    .controller('formLoginCtrl', formLoginCtrl)
})()
