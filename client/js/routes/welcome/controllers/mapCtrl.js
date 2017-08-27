/* global angular */
(function () {
  'use strict'
  function mapCtrl ($rootScope) {
    console.log('mapCtrl Loaded')

    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = false

    let map = L.map('map', {
      center: [41.603, 0.626],
      zoom: 15
    })
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map)

    let samplePoint = L.marker([41.598, 0.629]).addTo(map);

    // L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    //   attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //   maxZoom: 19
    // }).addTo(map)


  }
  angular
    .module('Wabout')
    .controller('mapCtrl', mapCtrl)
})()
