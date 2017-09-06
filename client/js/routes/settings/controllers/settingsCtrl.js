/* global angular */
(function () {
  'use strict'
  function settingsCtrl ($rootScope, DataService, $route, AuthService, $location, toastr) {

    if (!AuthService.isLoggedIn()) {
      $location.path('/login')
    }

    const self = this

    self.contacts = []

    const username = $rootScope.loggedUser
    console.log(username)

    self.granteds = {
      contacts: []
    }
    console.log(self.granteds)

    DataService.getUserIdByUserName(username)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => {
        console.log(data)
        data.data.forEach(contact => self.contacts.push(contact))
        console.log(self.contacts)
      })
      .then(() => self.contacts.forEach(contact => {
        if (contact.shareTo) {
          self.granteds.contacts.push(contact.id)
        }
      }))

      // .then(() => self.contacts.forEach(contact => {
      //   if (contact.shareTo) {
      //     self.granteds.contacts.push(contact.userId._id)
      //   }
      // }))
      // .then(console.log(self.contacts))
      // .then(console.log(self.granteds.contacts))

    self.updatePrivacy = (event) => {
      event.preventDefault
      console.log('submit')
      console.log(self.granteds.contacts)
      DataService.updatePrivacy(username, self.granteds.contacts)
        .then(() => toastr.success(`privacy settings updated successfully`))
        .catch(() => toastr.error(`an error happens updating privacy settings`))
    }
  }
  angular
    .module('Wabout')
    .controller('settingsCtrl', settingsCtrl)
})()
