'use strict';

describe('Controller: CelularesCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var CelularesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CelularesCtrl = $controller('CelularesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
