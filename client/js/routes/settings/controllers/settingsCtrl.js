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

    self.granteds = {
      contacts: []
    }

    DataService.getUserIdByUserName(username)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => {
        data.data.forEach(contact => self.contacts.push(contact))
      })
      .then(() => self.contacts.forEach(contact => {
        if (contact.shareTo) {
          self.granteds.contacts.push(contact.id)
        }
      }))

    self.updatePrivacy = (event) => {
      event.preventDefault
      DataService.updatePrivacy(username, self.granteds.contacts)
        .then(() => toastr.success(`privacy settings updated successfully`))
        .catch(() => toastr.error(`an error happens updating privacy settings`))
    }
  }
  angular
    .module('Wabout')
    .controller('settingsCtrl', settingsCtrl)
})()
