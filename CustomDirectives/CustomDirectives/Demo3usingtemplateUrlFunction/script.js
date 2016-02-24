
angular.module('docsSimpleDirective', [])
.controller('Controller', ['$scope', function ($scope) {
    $scope.customer = {
        name: 'Gaurav',
        address: '1600 Amphitheatre'
    };
}])
.directive('myCustomer', function () {
    return {
        templateUrl: function (elem, attr) {
            return 'customer-'+attr.type+'.html'
        }
    };
});