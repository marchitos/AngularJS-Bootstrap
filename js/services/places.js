angular.module('lunchApp').factory('places', ['$http',function ($http) {
	
	return {

		getPlaces : function(){
			return $http.get("./data/places.json");
		},

		getPlaceById : function(id){
			return $http.get("./data/place_"+id+".json");
		}

	};

}]);