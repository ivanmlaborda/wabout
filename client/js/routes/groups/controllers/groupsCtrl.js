/* global angular */
(function () {
  'use strict'
  function groupsCtrl ($rootScope) {
    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    console.log('groupsCtrl Loaded')
  }
  angular
    .module('Wabout')
    .controller('groupsCtrl', groupsCtrl)
})()
