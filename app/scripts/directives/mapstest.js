(function(){"use strict";



angular.module( 'map' ).directive( "mapstest", [ mapstest ]);
mapstestController.$inject = [ "$scope", "value_districts" ];



function mapstest () {
	return {
		restrict: 'E',
		templateUrl: '/templates/mapstest.html',
		controller: mapstestController
	}
}


function mapstestController ( $scope, value_districts ) {

	$scope.districts = value_districts;

}



}());