'use strict';

angular.module('uiApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('list', {
                url: '',
                templateUrl: 'app/main/list/list.html',
                controller: 'ListCtrl as vmList'
            });
    });
