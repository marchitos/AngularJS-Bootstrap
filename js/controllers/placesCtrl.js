angular.module('lunchApp')
.controller('placesCtrl', ['$scope','places', function ($scope,places) {
	
	$scope.radioModel = "pro";
	$scope.orderDir = true;

	//$scope.places = places.getPlaces();
	places.getPlaces().success(function(data){
		$scope.places = data;
	});

}])