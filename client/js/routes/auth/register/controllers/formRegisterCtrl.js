/* global angular */
(function () {
  'use strict'
  function formRegisterCtrl (AuthService, toastr) {
    this.register = (e) => {
      e.preventDefault()
      AuthService.register(this.username, this.password)
        .then(data => {
          if (data.success) toastr.success(data.msg)
          else toastr.error(data.msg)
        })
    }
  }
  angular
    .module('Wabout')
    .controller('formRegisterCtrl', formRegisterCtrl)
})()
