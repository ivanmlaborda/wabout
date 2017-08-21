/* global angular */
(function () {
  'use strict'
  function mapCtrl () {
    console.log('mapCtrl Loaded')
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


  }
  angular
    .module('Locator')
    .controller('mapCtrl', mapCtrl)
})()
