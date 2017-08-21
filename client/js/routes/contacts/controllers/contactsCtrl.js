/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($rootScope) {
    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    console.log('contactsCtrl Loaded')
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
