'use strict';

describe('Controller: ComputadorasCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var ComputadorasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComputadorasCtrl = $controller('ComputadorasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
