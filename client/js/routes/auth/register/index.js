/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/auth/register', {
      templateUrl: 'js/routes/auth/register/template.html'
    })
  })

})()
