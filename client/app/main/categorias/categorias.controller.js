'use strict';

angular.module('uiApp')
  .controller('CategoriasCtrl', function ($state, lodash) {
    var vm = this;
        vm.tabs = [
            {
                index: 0,
                title: 'Computadoras',
                state: 'computadoras',
                active: true
            },
            {
                index: 1,
                title: 'Celulares',
                state: 'celulares',
                active: false
            }
        ];
        vm.default = vm.tabs[0];
        vm.select = select;

        activate();

        function activate() {
            var current = lodash.find(vm.tabs, function (tab) {
                return tab.state === $state.current.name;
            });

            select(current ? current.index : vm.default.index);
        }

        function select(index) {
            vm.selected = vm.tabs[index];
            $state.go(vm.selected.state);
        }
  });
