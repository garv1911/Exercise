
angular.module('docsSimpleDirective', [])
.controller('Controller', ['$scope', function ($scope) {
    $scope.customer = {
        name: 'gaurav',
        address: '1600 Amphitheatre'
    };
}])
.directive('myCustomer', function () {
    return {
        templateUrl:'my-customer.html'
    };
});