'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-cell', {
        url: '/edit-cell',
        templateUrl: 'app/main/categorias/celulares/edit-cell/edit-cell.html',
        controller: 'EditCellCtrl'
      });
  });
