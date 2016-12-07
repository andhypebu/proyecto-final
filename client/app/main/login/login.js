'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        parent: 'main',
        url: '/',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginCtrl as vmLogin'
      });
  });
