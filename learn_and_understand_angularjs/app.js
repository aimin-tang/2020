var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })
});

weatherApp.service('cityService', function () {
    this.city = "New York, NY";
});

weatherApp.controller('homeController', ['$scope', 'cityService',
    function ($scope, cityService) {
        $scope.city = cityService.city;
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        })
    }]);

weatherApp.controller('forecastController', ['$scope', '$http', 'cityService',
    function ($scope, $http, cityService) {
        $scope.city = cityService.city;
        $scope.result = '';
        let url1 = 'https://api.openweathermap.org/data/2.5/onecall'
        let url2 = 'lat=60.99&lon=30.9'
        let url3 = 'appid=ad28590d4ac0765fa63e1ba8f2fc148f';
        let url = url1 + '?' + url2 + '&' + url3;
        $http.get(url)
            .success(function (result) {
                temp = result.current.temp;
                $scope.result = (temp - 273).toFixed(1);
            })
            .error(function (data, status) {
                console.log(data);
            });
    }]);
