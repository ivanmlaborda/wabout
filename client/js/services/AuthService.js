/* global angular */
(function () {
  angular.module('Wabout')
    .factory('AuthService', AuthService)

  function AuthService ($rootScope, $http, StorageService, jwtHelper) {

    function isLoggedIn () {
      const token = StorageService.getToken()
      if (!token) return false
     	return true
    }

    function setCredentials (token) {
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload.username
    }

    function register (username, password, email) {
      return $http.post('/auth/register', {username, password, email})
                .then(res => res.data)
    }

    function login (username, password) {
      return $http.post('/auth/login', {username, password})
                .then(res => res.data)
                .then(data => {
                  StorageService.saveToken(data.token)
                  setCredentials(data.token)
                  return data.success
                })
    }

    function logout (username, password) {
      StorageService.removeToken()
      delete $rootScope.loggedUser
    }

    return { register, login, isLoggedIn, setCredentials, logout }
  }
})()
