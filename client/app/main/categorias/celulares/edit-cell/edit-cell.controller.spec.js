'use strict';

describe('Controller: EditCellCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var EditCellCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCellCtrl = $controller('EditCellCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
