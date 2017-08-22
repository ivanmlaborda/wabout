/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/groups', {
      templateUrl: 'js/routes/groups/template.html'
    })
  })

})()
