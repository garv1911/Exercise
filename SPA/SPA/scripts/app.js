var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/create', {
                    title: 'Maruti',
                    templateUrl: 'templates/create.html',
                    controller: 'createController'
                }).
                when('/view', {
                    templateUrl: 'templates/view.html',
                    controller: 'viewController'
                }).
                 when('/delete', {
                     templateUrl: 'templates/delete.html',
                     controller: 'deleteController'
                 }).
                when('/route4', {
                    templateUrl: 'templates/mypage.html'

                }).
                otherwise({
                    redirectTo: '/route4'
                });
    }]);