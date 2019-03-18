/*previsaoApp.service('cityService', function () {

    this.city = "São Manuel, SP";

});

previsaoApp.service('previsaoService', ['$resource', function ($resource) {

    this.get = function (city, days) {

        var api = $resource("http://openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return api.get({
            q: city,
            cnt: days
        });

    }

}]);*/