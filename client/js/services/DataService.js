angular.module('Wabout')
  .factory('DataService', function ($http) {

    function getUserIdByUserName (username) {
      console.log(username)
      let url = '/user/' + username
      return $http.get(url)
    }

    function getUserById (userId) {
      console.log(userId)
      let url = '/user/id/' + userId
      return $http.get(url)
    }

    function getContactsByUserId (userId) {
      let url = '/contacts/id/' + userId
      console.log(url)
      return $http.get(url)
    }

    function removeContact (userId) {
      console.log(userId)
      let url = '/contact/' + userId
      return $http.delete(url)
    }

    function submitLogin (username) {
      let data = {username}
      const url = '/auth/login'
      return $http.post(url, data)
    }

    function addContact (username, contactName) {
      console.log('add contact service')
      let data = {contactName}
      let url = '/contact/' + username
      console.log(data)
      console.log(url)
      return $http.post(url, data)
    }

    function updatePrivacy (username, grantedContacts) {
      let data = {grantedContacts}
      let url = '/contact/privacy/' + username
      console.log(data)
      return $http.post(url, data)
    }

    return {
      getUserIdByUserName,
      getUserById,
      getContactsByUserId,
      removeContact,
      submitLogin,
      addContact,
      updatePrivacy
    }
  })
