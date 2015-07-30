(function(){"use strict";



angular.module( 'map' ).directive( "regions", [ regions ]);
regionsController.$inject = [ "$scope", "value_districts", "googlemaps" ];



function regions () {
	return {
		restrict: 'E',
		templateUrl: '/templates/regions.html',
		controller: regionsController,
		replace: true
	}
}


function regionsController ( $scope, value_districts ) {

	$scope.districts = value_districts;

}



}());