/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($rootScope, DataService, $route, AuthService, $location) {

    if (!AuthService.isLoggedIn()) {
      $location.path('/login')
    }

    const self = this

    const username = $rootScope.loggedUser
    console.log(username)


    self.contacts = []

    self.addContact = (e) => {
      e.preventDefault()
      console.log('submit')
      const {contactName} = self
      DataService.addContact(username, contactName)
        .then(() => {
          $route.reload()
        })
    }

    DataService.getUserIdByUserName(username)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(console.log)
      // .then(data => data.data.contacts.forEach(key => self.contacts.push(key.userId)))
      // .then(data => console.log(self.contacts))

    // const removeContact = (userId) => DataService.removeContact(userId)
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
