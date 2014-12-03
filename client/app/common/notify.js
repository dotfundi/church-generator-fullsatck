(function () {
    'use strict';

    angular
        .module('app.common')
        .factory('notify', notify);

    notify.$inject = ['toastr'];

    /* @ngInject */
    function notify(toastr) {
        var service = {
            success: success,
            error: error,
            info: info,
            warning: warning
        };

        return service;

        ////////////////

        function success(msg) {
            toastr.success(msg);
        }

        function error(msg) {
            toastr.error(msg);
        }

        function info(msg){
            toastr.info(msg);
        }

        function warning(msg){
            toastr.warning(msg);
        }
    }
})();