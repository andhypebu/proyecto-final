'use strict';

describe('Controller: EditComputerCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var EditComputerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditComputerCtrl = $controller('EditComputerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
