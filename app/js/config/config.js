angular.module('weathercast', [
  'ui.router',
  'ngResource',
  'ngCookies'
])

  .config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {

    // Configure the app's path
    $locationProvider.html5Mode({
      // Disables hashbang mode
      enabled: true,
      // Unrelated to hashbang but avoids $location error
      requireBase: false
    });

    // Setup the template routes/states
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeCtrl',
            templateUrl: '/templates/home.html'
        })
        .state('forecast', {
            url: '/forecast',
            controller: 'forecastCtrl',
            templateUrl: '/templates/forecast.html'
        })
        .state('forecast-days', {
          url: '/forecast/:days',
          controller: 'forecastCtrl',
          templateUrl: '/templates/forecast.html'
        });

  }]);
