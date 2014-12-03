(function () {
    'use strict';

    angular
        .module('app.data')
        .factory('organizationSvc', organization);

    organization.$inject = ['Restangular'];

    /* @ngInject */
    function organization(Restangular) {
        return Restangular.service('organizations');
    }
})();