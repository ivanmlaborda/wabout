/* global angular */
(function () {
  'use strict'
  angular.module('Locator')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/routes/welcome/template.html'
    })
  })

})()
