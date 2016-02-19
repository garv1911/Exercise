var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/route1', {
                    title: 'Maruti',
                    templateUrl: 'templates/create.html',
                    controller: 'createController'
                }).
                when('/route2', {
                    templateUrl: 'templates/delete.html',
                    controller: 'deleteController'
                }).
                 when('/route3/:param', {
                     templateUrl: 'templates/view.html',
                     controller: 'viewController'
                 }).
                when('/route4', {
                    templateUrl: 'templates/mypage.html'

                }).
                otherwise({
                    redirectTo: '/route4'
                });
    }]);