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
    console.log(username)


    self.addContact = (e) => {
      e.preventDefault()
      console.log('submit')
      const {contactName} = self
      DataService.addContact(username, contactName)
        .then(() => {
          $route.reload()
          toastr.success(`${contactName} has been properly added`)
        })
        .catch(() => toastr.error(`${contactName} does not exist in our DB`))
    }

    DataService.getUserIdByUserName(username)
      .then(data => DataService.getContactsByUserId(data.data._id))
      .then(data => {
        self.contacts = data.data
        console.log(self.contacts)
      })

    // const removeContact = (userId) => DataService.removeContact(userId)
  }
  angular
    .module('Wabout')
    .controller('contactsCtrl', contactsCtrl)
})()
