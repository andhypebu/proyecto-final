'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categorias', {
        parent: 'login',
        url: 'categorias',
        templateUrl: 'app/main/categorias/categorias.html',
        controller: 'CategoriasCtrl as vmCategorias'
      });
  });