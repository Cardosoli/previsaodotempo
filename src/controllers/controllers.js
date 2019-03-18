weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/search");
    };

}]);

weatherApp.controller('CardController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/search");
    };

}]);


weatherApp.controller('DetalhamentoController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/search?Q=cidade");
    };

}]);



weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || 2;


    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.weatherResults = weatherService.getWeather($scope.city, $scope.days);

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToCelsius = function (degK) {
        return Math.round(degK - 273.15);
    }

    $scope.convertToDate = function (l) {
        return new Date(l * 1000);
    }
}]);