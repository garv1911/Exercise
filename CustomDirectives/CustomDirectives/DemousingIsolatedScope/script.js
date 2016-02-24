
angular.module('docsSimpleDirective', [])
.controller('myCtrl1', ['$scope', function ($scope) {
    $scope.user1 = {
        name: 'Gaurav',
        address: '1600 Amphitheatre'
    };
    $scope.user2 = {
        name: 'Avinash',
        address: '1600 Amphitheatre'
    };
}])
   
.directive('myCustomer', function () {
    return {
        retrict: 'E',
        scope:{
            customer: '=info'
        },
        templateUrl: 'my-customer.html'
        }
   
});