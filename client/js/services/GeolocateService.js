angular.module('Wabout')
  .factory('GeolocateService', function () {
    function getGeolocation () {
      let userCoords = {}
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      return new Promise(function (resolve, reject) {
        function success (position) {
          userCoords.lat = position.coords.latitude
          userCoords.lng = position.coords.longitude
          userCoords.acr = position.coords.accuracy
          resolve(userCoords)
        }

        function error (err) {
          console.warn('ERROR(' + err.code + '): ' + err.message)
        }

        navigator.geolocation.getCurrentPosition(success, error, options)
      })
    }

    function setUserView (userCoords, zoom) {
      console.log(userCoords)
      const userView = {}
      userView.lat = +userCoords.lat
      userView.lng = +userCoords.lng
      userView.zoom = +zoom

      return userView
    }

    return {
      getGeolocation,
      setUserView
    }
  })
