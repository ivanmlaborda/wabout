/* global angular */
(function () {
  'use strict'
  function formLoginCtrl ($rootScope, $scope, DataService, $window) {
    console.log('formLoginCtrl Loaded')


    //OJO SOLO PARA DESARROLLO FRONT!
    $rootScope.logged = false
    // $rootScope.userName = $scope.userName
    // $location.path('/#!/explore')
    $scope.submit = function() {
      const {userName} = $scope
      DataService.loginTest(userName)
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
