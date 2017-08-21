/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/explore', {
      templateUrl: 'js/routes/explore/template.html'
    })
  })

})()
