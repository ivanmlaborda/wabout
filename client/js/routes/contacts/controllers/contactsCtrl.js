/* global angular */
(function () {
  'use strict'
  function contactsCtrl ($rootScope, DataService, $route, AuthService, $location, toastr) {

    if (!AuthService.isLoggedIn()) {
      $location.path('/login')
    }

    const self = this

    self.contacts = []

    const username = $rootScope.loggedUser

    self.addContact = (e) => {
      e.preventDefault()
      const {contactName} = self
      DataService.addContact(username, contactName)
        .then(() => {
          $route.reload()
          toastr.success(`${contactName} has been properly added`)
        })
        .catch(() => toastr.warning(`${contactName} does not exist in our DB`))
    }

    DataService.getUserIdByUserName(username)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => {
        self.contacts = data.data
      })

    self.removeContact = (e, contactId, contactName) => {
      e.preventDefault()
      DataService.removeContact(username, contactId)
      .then(() => {
        $route.reload()
        toastr.success(`${contactName} has been properly deleted`)
      })
      .catch(() => toastr.warning(`a problem happens trying to delete ${contactName}`))
    }
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
