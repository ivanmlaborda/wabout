/* global angular */
(function () {
  'use strict'
  function formLoginCtrl ($rootScope) {
    console.log('formLoginCtrl Loaded')

    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = false

  }
  angular
    .module('Wabout')
    .controller('formLoginCtrl', formLoginCtrl)
})()
