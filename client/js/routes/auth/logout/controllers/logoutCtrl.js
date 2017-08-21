/* global angular */
(function () {
  'use strict'
  function logoutCtrl ($rootScope) {
    console.log('logoutCtrl Loaded')

    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = false

  }
  angular
    .module('Wabout')
    .controller('logoutCtrl', logoutCtrl)
})()
