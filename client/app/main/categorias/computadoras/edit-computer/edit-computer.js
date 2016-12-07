'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-computer', {
        url: '/edit-computer',
        templateUrl: 'app/main/categorias/computadoras/edit-computer/edit-computer.html',
        controller: 'EditComputerCtrl as vmEditComputer'
      });
  });
