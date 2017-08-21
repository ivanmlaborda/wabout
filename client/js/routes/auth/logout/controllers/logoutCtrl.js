/* global angular */
(function () {
  'use strict'
  function logoutCtrl () {
    console.log('logoutCtrl Loaded')
  }
  angular
    .module('Wabout')
    .controller('logoutCtrl', logoutCtrl)
})()
