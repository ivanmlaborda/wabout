/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($rootScope, DataService) {
    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = true
    $rootScope.userName = 'ivan'
    console.log('contactsCtrl Loaded')

    DataService.getUserIdByUserName($rootScope.userName)
      .then(contacts => DataService.getContactsByUserId(contacts))
      .then(console.log)

  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
