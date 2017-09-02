/* global angular */
(function () {
  'use strict'
  function settingsCtrl ($scope, $rootScope, DataService) {
    // OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true

    console.log('settingsCtrl Loaded')
    $scope.contacts = []
    $scope.granteds = {
      contacts: []
    }
    console.log($scope.granteds)

    DataService.getUserIdByUserName($rootScope.userName)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => {
        console.log(data)
        data.data.contacts.forEach(contact => $scope.contacts.push(contact))})
      .then(() => $scope.contacts.forEach(contact => {
        if (contact.shareTo) {
          $scope.granteds.contacts.push(contact.userId._id)
        }
      }))
      .then(console.log($scope.contacts))
      .then(console.log($scope.granteds.contacts))

    $scope.updatePrivacy = (event) => {
      event.preventDefault
      console.log('submit')
      console.log($scope.granteds.contacts)
      DataService.updatePrivacy($rootScope.userName, $scope.granteds.contacts)
        .then(data => console.log(data.data.message))
    }
  }
  angular
    .module('Wabout')
    .controller('settingsCtrl', settingsCtrl)
})()
