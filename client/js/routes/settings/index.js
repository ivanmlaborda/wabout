/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/settings', {
      templateUrl: 'js/routes/settings/template.html'
    })
  })

})()
