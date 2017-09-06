/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($rootScope, DataService, $route, AuthService, $location) {

    if (!AuthService.isLoggedIn()) {
      $location.path('/login')
    }

    const self = this

    self.contacts = []

    const username = $rootScope.loggedUser
    console.log(username)


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
      .then(data => {
        self.contacts = data.data
        console.log(self.contacts)
      })

      // .then(data => data.contacts.forEach(contact => self.contacts.push(contact.id)))
      // .then(() => console.log(self.contacts))

      // .then(data => console.log(self.contacts))

    // const removeContact = (userId) => DataService.removeContact(userId)
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
