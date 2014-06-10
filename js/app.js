angular.module('lunchApp', ['ngRoute', 'ui.bootstrap'])
.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: './partials/list.html',
			controller: 'placesCtrl'
		}).
		when('/places/:placeid', {
			templateUrl: './partials/place.html',
			controller: 'placeCtrl'
		}).
		otherwise({ 
			redirectTo: '/' 
		});
}])
