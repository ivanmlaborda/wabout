angular.module('Wabout')
  .factory('DataService', function ($http) {

    function getUserIdByUserName (username) {
      console.log(username)
      var url = '/user/' + username
      return $http.get(url)
    }

    function getUserById (userId) {
      console.log(userId)
      var url = '/user/id/' + userId
      return $http.get(url)
    }

    function getContactsByUserId (userId) {
      console.log(userId)
      var url = '/contacts/id/' + userId
      return $http.get(url)
    }

    function removeContact (userId) {
      console.log(userId)
      var url = '/contact/' + userId
      return $http.delete(url)
    }

    function submitLogin (username) {
      let data = {username}
      const url = '/auth/login'
      return $http.post(url, data)
    }

    function submitContact (username, contactName) {
      let data = {contactName}
      let url = '/contact/' + username
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
      submitContact,
      updatePrivacy
    }
  })
