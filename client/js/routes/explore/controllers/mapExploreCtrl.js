/* global angular */
(function() {
  'use strict'

  function mapExploreCtrl($rootScope) {

    //OJO SOLO PARA DESARROLLO FRONT
    $rootScope.logged = true

    console.log('mapExploreCtrl Loaded')
    let map = L.map('map', {
      center: [41.610, 0.630],
      zoom: 15
    })
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map)

    // L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    //   attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //   maxZoom: 19
    // }).addTo(map)



    // ---------------------------------------------------

    // check whether browser supports geolocation api
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(positionSuccess, positionError, {
        enableHighAccuracy: true
      });
    } else {
      $('.map').text('Your browser is out of fashion, there\'s no geolocation!');
    }

    function positionSuccess(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      let acr = position.coords.accuracy;
      console.log(`lat ${lat}`)
      console.log(`lng ${lng}`)
      console.log(`acr ${acr}`)

      // // mark user's position
      // var userMarker = L.marker([lat, lng], {
      // 	icon: redIcon
      // });
      // // uncomment for static debug
      // // userMarker = L.marker([51.45, 30.050], { icon: redIcon });

      // ---------------------------------------------------
    }


    // handle geolocation api errors
  	function positionError(error) {
  		var errors = {
  			1: 'Authorization fails', // permission denied
  			2: 'Can\'t detect your location', //position unavailable
  			3: 'Connection timeout' // timeout
  		};
  		showError('Error:' + errors[error.code]);
  	}

  	function showError(msg) {
  		info.addClass('error').text(msg);

  		doc.click(function() {
  			info.removeClass('error');
  		});
  	}

  }
  angular
    .module('Wabout')
    .controller('mapExploreCtrl', mapExploreCtrl)
})()
