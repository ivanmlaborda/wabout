/* global angular */
(function () {
  'use strict'
  function settingsCtrl ($rootScope) {
    console.log('settingsCtrl Loaded')

    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true

  }
  angular
    .module('Wabout')
    .controller('settingsCtrl', settingsCtrl)
})()
