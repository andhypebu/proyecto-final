'use strict';

describe('Controller: DeleteComputerCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var DeleteComputerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeleteComputerCtrl = $controller('DeleteComputerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
