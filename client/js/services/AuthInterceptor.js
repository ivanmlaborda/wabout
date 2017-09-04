/* global angular */
(function () {
  angular.module('Wabout')
    .factory('AuthInterceptor', AuthInterceptor)

  function AuthInterceptor (StorageService) {
    return {
      request: function (config) {
        const token = StorageService.getToken()
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      }
    }
  }
})()