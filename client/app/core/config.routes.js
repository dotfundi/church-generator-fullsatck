
(function(){
    'use strict';

    angular.module('app.core')
        .config(config)
        .run(run);
    /* @ngInject */
    function config($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }

    /* @ngInject */
    function run($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
})();
