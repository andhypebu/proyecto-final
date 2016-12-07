'use strict';

describe('Controller: DeleteCellCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var DeleteCellCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteCellCtrl = $controller('DeleteCellCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
