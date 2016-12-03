'use strict';

angular.module('uiApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
