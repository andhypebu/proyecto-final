'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('delete-cell', {
        url: '/delete-cell',
        templateUrl: 'app/main/categorias/celulares/delete-cell/delete-cell.html',
        controller: 'DeleteCellCtrl as vmDeleteCell'
      });
  });
