'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('celulares', {
        parent:'categorias',
        url: '/celulares',
        templateUrl: 'app/main/categorias/celulares/celulares.html',
        controller: 'CelularesCtrl as vmCelulares'
      });
  });
