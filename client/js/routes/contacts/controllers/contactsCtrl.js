/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($scope, $rootScope, DataService) {
    // OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    $rootScope.userName = 'ivan'
    console.log('contactsCtrl Loaded')
    $scope.contacts = []

    DataService.getUserIdByUserName($rootScope.userName)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => data.data.contacts.forEach(key => $scope.contacts.push(key.userId)))
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
