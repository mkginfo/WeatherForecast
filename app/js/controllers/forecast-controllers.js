angular.module('weathercast')

  .controller('homeCtrl', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

    $scope.city = cityService.city;

    $scope.$watch('city', function(){
      cityService.city = $scope.city;
    });

    $scope.submit = function(){
      $location.path('/forecast');
    };

  }])

  .controller('forecastCtrl', ['$scope', '$stateParams', 'cityService', 'weatherService', function($scope, $stateParams, cityService, weatherService){

    var apiKey = 'e276abfa164dc936a0df70fead6e209a';
    $scope.city = cityService.city || 'Amsterdam';
    
	$scope.days = $stateParams.days || 1;
	
	weatherService.GetWeather($scope.city, $scope.days, apiKey).then(function(data){
			$scope.weatherResult = data.data;
			$scope.iconUrl = 'http://openweathermap.org/img/w/'+$scope.dat.weather[0].icon+ '.png';
	});
	
    $scope.convertDate = function(apiDate){
      return new Date(apiDate * 1000);
    };

    $scope.findWeatherIcon = function(description){

      var icon = null;

      if(description === 'Clouds'){ icon = 'cloudy';
      } else if(description === 'Rain'){ icon = 'rain';
      } else if(description === 'Snow'){ icon = 'snow';
      } else if(description === 'Clear'){ icon = 'day-sunny';
      } else if(description === 'Thunderstorm'){ icon = 'thunderstorm';
    }
      return icon;
    };

  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
	});

