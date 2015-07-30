(function(){"use strict";



angular.module( 'map' ).directive( "results", [ results ]);
resultsController.$inject = [ "$scope" ];



function results () {
	return {
		restrict: 'E',
		templateUrl: '/templates/results.html',
		controller: resultsController,
		replace: true
	}
}


function resultsController ( $scope, value_districts ) {

	$scope.results = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

}



}());