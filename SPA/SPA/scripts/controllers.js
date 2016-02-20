module.controller("createController", function ($scope, $route) {
    $scope.cars = ['AUDI', 'BMW', 'MERCEDES'];
    $scope.my = { favorite: 'AUDI' };
    console.log($route.current.title);

});
module.controller("viewController", function ($scope) {
    $scope.clickCounter = 0;
    $scope.check = function () {
        $scope.clickCounter++;
    };
});
module.controller("deleteController", function ($scope, $filter, $routeParams) {
    $scope.param = $routeParams.param;
    $scope.cars = [
       { carId: 001, carName: 'Santro' },
       { carId: 002, carName: 'Swift Dzire' },
       { carId: 003, carName: '120' },
       { carId: 004, carName: 'Verna' },
       { carId: 005, carName: 'City' }];
    $scope.cars2 = $scope.cars;
    $scope.$watch('search', function (val) {
        $scope.cars = $filter('filter')($scope.cars2, val);
    });
});

