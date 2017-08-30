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
      return $http.get(url)
    }

    return {
      getUserIdByUserName,
      getUserById,
      getContactsByUserId,
      removeContact
    }
  })
