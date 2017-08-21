/* global angular */
(function () {
  'use strict'
  angular.module('Wabout')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/contacts', {
      templateUrl: 'js/routes/contacts/template.html'
    })
  })

})()
