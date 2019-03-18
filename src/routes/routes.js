
// routes
previsaoApp.config(function ($routeProvider) {

    $routeProvider.

    when('/', {
            templateUrl: 'home/home.component.html',
            controller: 'homeController'
        })
        .when('/search/q={{cidade}}', {
            templateUrl: 'home/home.component.html',
            controller: 'homeController'
        })
        .when('/', {
            templateUrl: 'detalhamento-tempo/detalhamento-tempo.component.html',
            controller: 'DetalhamentoController'
        })
        .when('/forecast/', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        });
});