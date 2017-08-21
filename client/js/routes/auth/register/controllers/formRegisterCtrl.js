/* global angular */
(function () {
  'use strict'
  function formRegisterCtrl ($rootScope) {
    console.log('formRegisterCtrl Loaded')

    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = false

  }
  angular
    .module('Wabout')
    .controller('formRegisterCtrl', formRegisterCtrl)
})()
