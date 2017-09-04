/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($scope, $rootScope, DataService, $route) {
    // OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    console.log('contactsCtrl Loaded')
    const username = $rootScope.username


    $scope.contacts = []

    $scope.submit = () => {
      // console.log('submit')
      const {username} = $rootScope
      const {contactName} = $scope
      DataService.submitContact(username, contactName)
        .then(() => {
          $route.reload()
        })
    }

    DataService.getUserIdByUserName(username)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => data.data.contacts.forEach(key => $scope.contacts.push(key.userId)))

    const removeContact = (userId) => DataService.removeContact(userId)
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
