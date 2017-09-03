angular.module('Wabout')
  .factory('DataService', function ($http) {

    function getUserIdByUserName (userName) {
      console.log(userName)
      var url = '/user/' + userName
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

    function submitLogin (userName) {
      let data = {userName}
      const url = '/auth/login'
      return $http.post(url, data)
    }

    function submitContact (userName, contactName) {
      let data = {contactName}
      let url = '/contact/' + userName
      return $http.post(url, data)
    }

    function updatePrivacy (userName, grantedContacts) {
      let data = {grantedContacts}
      let url = '/contact/privacy/' + userName
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
