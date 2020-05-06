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

weatherApp.service('locService', function () {
    this.loc = {
        lat: 0,
        lon: 0
    }
});

weatherApp.controller('homeController', ['$scope', 'locService',
    function ($scope, locService) {
        $scope.loc = locService.loc;
        $scope.$watch('changed', function () {
            locService.loc = {
                lon: $scope.lon,
                lat: $scope.lat,
            }
            $scope.changed = false;
        })
        $scope.submit = function () {
            $scope.changed = true;
        }
    }]);

weatherApp.controller('forecastController', ['$scope', '$http', 'locService',
    function ($scope, $http, locService) {
        $scope.loc = locService.loc;
        $scope.result = '';
        let url1 = 'https://api.openweathermap.org/data/2.5/onecall';
        let url2 = 'lat=' + $scope.loc.lat + '&lon=' + $scope.loc.lon;
        let url3 = 'appid=ad28590d4ac0765fa63e1ba8f2fc148f';
        let url = url1 + '?' + url2 + '&' + url3;
        console.log("url: ", url);
        $http.get(url)
            .success(function (result) {
                temp = result.current.temp;
                $scope.result = (temp - 273).toFixed(1);
            })
            .error(function (data, status) {
                console.log(data);
            });
    }]);
