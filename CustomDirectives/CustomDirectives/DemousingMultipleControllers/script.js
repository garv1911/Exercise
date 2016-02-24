
angular.module('docsSimpleDirective', [])
.controller('myCtrl1', ['$scope', function ($scope) {
    $scope.customer = {
        name: 'Gaurav',
        address: '1600 Amphitheatre'
    };
}])
    .controller('myCtrl2', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Avinash',
            address: '1600 Amphitheatre'
        };
    }])
.directive('myCustomer', function () {
    return {
        retrict:'E',
        templateUrl: 'my-customer.html'
        }
   
});