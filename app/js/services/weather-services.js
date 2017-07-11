angular.module('weathercast')
  .service('cityService', function () {
    this.city = null;
  })
  .service('weatherService', ['$http', function($http){

    this.GetWeather = function(city, days, apiKey) {
		  return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&units=metric&cnt="+days+"&APPID="+apiKey);
    };

  }]);
