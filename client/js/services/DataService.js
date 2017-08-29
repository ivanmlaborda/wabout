angular.module('Wabout')
  .factory('DataService', function () {

    function getUserIdByUserName (userName) {
      console.log(userName)
      var url = '/user/' + userId
      return $http.get(url)
    }

    function getContactsByUserId (userId) {
      console.log(userId)
      var url = '/contacts/' + userId
      return $http.get(url)
    }

    return {
      getUserIdByUserName,
      getContactsByUserId
    }
  })
