angular.module('Wabout')
  .factory('GeolocateService', function() {

    function getGeolocation () {

      let userCoords = {}
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      function success (position) {
        userCoords.lat = position.coords.latitude
        userCoords.lng = position.coords.latitude
        userCoords.acr = position.coords.accuracy
      }

      function error (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message)
      }

      navigator.geolocation.getCurrentPosition(success, error, options)

      return userCoords
    }

    return {
      getGeolocation: getGeolocation
    }
  })
