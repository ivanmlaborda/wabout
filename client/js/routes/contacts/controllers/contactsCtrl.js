/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($scope, $rootScope, DataService) {
    // OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    console.log('contactsCtrl Loaded')
    // $rootScope.userName = 'ivan'

    $scope.contacts = []

    DataService.getUserIdByUserName($rootScope.userName)
      .then(data => {
        console.log(data)
        return DataService.getContactsByUserId(data.data._id)
      })
      .then(data => data.data.contacts.forEach(key => $scope.contacts.push(key.userId)))

    const removeContact = (userId) => DataService.removeContact(userId)
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
