/* global angular */
(function () {
  'use strict'
  function formLoginCtrl ($rootScope, $scope, DataService, $window) {
    console.log('formLoginCtrl Loaded')

    $scope.submit = function() {
      const {userName} = $scope
      DataService.submitLogin(userName)
        .then((data) => {
          console.log(data)
          $rootScope.userName = data.data
          $window.location.href = '/#!/explore'
        })
    }



  }

  angular
    .module('Wabout')
    .controller('formLoginCtrl', formLoginCtrl)
})()
