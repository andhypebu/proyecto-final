'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('computadoras', {
        parent:'categorias',
        url: '/computadoras',
        templateUrl: 'app/main/categorias/computadoras/computadoras.html',
        controller: 'ComputadorasCtrl as vmComputadoras'
      });
  });
