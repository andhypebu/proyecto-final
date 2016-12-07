'use strict';

angular.module('uiApp')
  .controller('EditComputerCtrl', function ($scope,$modalInstance,cat) {
    $scope.message = 'Hello';
    $scope.cat = cat;
  });
