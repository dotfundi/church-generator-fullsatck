(function(){
    'use strict';

    //restangular config
    angular.module('app.core')
        .config(config);

    function config(RestangularProvider){
        RestangularProvider.setBaseUrl('/api');
        RestangularProvider.setRestangularFields({
            id: '_id'
        });

        RestangularProvider.setResponseInterceptor(function(data, operation, what){
            if(operation == 'getList'){

                var list = [];

                if(data.results){
                    list.results = data.results;
                    list.pagination = {
                        current: data.current,
                        last: data.last,
                        prev: data.prev,
                        next: data.next,
                        pages: data.pages,
                        count: data.count
                    };
                }
                else{ list = data;}

                return list;
            }
            return data;

        });
    }

})();