angular.module('weathercast').directive('weatherResults', function() {
    return {
      templateUrl: 'templates/directives/results.html',
      restrict: 'E',
      replace: true,
      scope: {
        weatherData: '=',
		iconUrl: '=',
        convertToStandard: '&',
        convertToDate: '&',
        dateFormat: '@',
        weatherIcon: '&'
      },
      link: function(scope, element, attrs){
        // stuff that registers DOM listeners and updates the DOM.
      }
    };
  });
