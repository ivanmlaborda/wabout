/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/auth/logout', {
      templateUrl: 'js/routes/auth/logout/template.html'
    })
  })

})()
