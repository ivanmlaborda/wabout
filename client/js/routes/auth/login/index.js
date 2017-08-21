/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/auth/login', {
      templateUrl: 'js/routes/auth/login/template.html'
    })
  })

})()
