/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($rootScope) {
    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    // $rootScope.userName = 'ivan'
    console.log('contactsCtrl Loaded')
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
