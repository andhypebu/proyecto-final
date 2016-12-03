'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginCtrl'
      });
  });
