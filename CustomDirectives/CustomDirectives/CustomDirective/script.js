
var app = angular.module('routingApp', ['ngRoute']);

app.factory('Data', function () {
    var data = [{
        "fn": "A",
        "ln": "P"
    }];
    return {

        /*getter and setter for data*/
        setData: function (obj) {
            data.push(obj);
        },
        getData: function () {
            return data;
        }
    };
})

var MainController = function ($scope) {
    $scope.message = "This is controller";
};



//Custom Directives

/*app.directive to register the custom directive with the app*/

app.directive('myViewDirective', function () {
    return {
        templateUrl: 'my-view.html'
    };
});

app.directive('myDeleteDirective', function () {
    return {
        templateUrl: 'my-delete.html'
    };
});

app.directive('myCreateDirective', function () {
    return {
        templateUrl: 'my-create.html'
    };
});



// configure our routes
app.config(function ($routeProvider) {
    $routeProvider
          .when('/create', {
              templateUrl: 'create.html',
              controller: 'CreateController'
          })

    .when('/view', {
        templateUrl: 'view.html',
        controller: 'ViewController'
    })

    .when('/delete', {
        templateUrl: 'delete.html',
        controller: 'DeleteController'
    });
});

app.controller("MainController", MainController);

// create the controller and inject Angular's $scope
app.controller('CreateController', function ($scope, Data) {
    $scope.user = {};
    $scope.addUser = function () {
        Data.setData($scope.user);
    };

});

app.controller('ViewController', function ($scope, Data) {
    $scope.message = "msg from View Controller";

    // JSON Object to display in our view
    $scope.employees = Data.getData();

});
app.controller('DeleteController', function ($scope, Data) {
    $scope.message = "msg from Delete Controller";

    console.log(Data);

    $scope.employees = Data.getData();

    /*Single row checkbox deletion*/
    $scope.deleteItem = function (index) {
        $scope.employees.splice(index, 1);
    };
    /*Multiple check box delete option*/
    //$scope.deleteItem = function (index) {
    //    //angular.forEach($scope.employees, function (index) {
    //    //    console.log(index)
    //    //    if ($scope.employees.selected) {
    //    //        $scope.employees.splice(index, 1);
    //    //    }
    //    //});
    //    $scope.employees.splice(index, 1);
    //}

    //    $scope.removeItem = function (index) {
    //    for (var i = $scope.data.length - 1; i >= 0; i--) {
    //        if ($scope.selectItem[i]) {
    //            //delete row from data
    //            $scope.data.splice(i, 1);
    //            //delete rowSelection property
    //            delete $scope.selectItem[i];
    //        }
    //    }
    //}
});