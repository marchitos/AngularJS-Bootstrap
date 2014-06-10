angular.module('lunchApp')
.controller('placeCtrl', ['$scope','$route','places', function ($scope,$route,places) {

	$scope.place = {};

	$scope.toggleVote = function(item){

		if (item.voted){
			delete item.voted;
			item.count--;
		}
		else {
			item.voted = true;
			item.count++;
		}
	}

	$scope.pro = function(){
		var total = 0;
		for (var i in $scope.place.prolist){
			total += $scope.place.prolist[i].count;
		}
		return total;
	}

	$scope.cons = function(){
		var total = 0;
		for (var i in $scope.place.conslist){
			total += $scope.place.conslist[i].count;
		}
		return total;
	}

	places.getPlaceById($route.current.params.placeid).success(function(data){
		$scope.place = data;
	});
}])