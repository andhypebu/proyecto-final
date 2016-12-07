'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('delete-computer', {
        url: '/delete-computer',
        templateUrl: 'app/main/categorias/computadoras/delete-computer/delete-computer.html',
        controller: 'DeleteComputerCtrl as vmDeleteComputer'
      });
  });
