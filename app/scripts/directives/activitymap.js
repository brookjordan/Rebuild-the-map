(function(){"use strict";



angular.module( 'map' ).directive( 'activitymap', [ activitymap ]);
activitymapController.$inject = [ '$scope', 'googlemaps', 'value_districts' ];



function activitymap () {
	return {
		restrict: 'E',
		templateUrl: '/templates/activitymap.html',
		controller: activitymapController
	}
}


function activitymapController ( $scope, googlemaps, value_districts ) {
	//CLEAN UP

	//	VARIABLES
	var map;
	var districtName;

	$scope.districtsCoords = {};
	$scope.districtsPolygons = {};



	//	DO STUFF
	initialize();

	for ( districtName in value_districts ) {
		addDistrict( value_districts[ districtName ][0].points, districtName );
	}

	console.log( $scope.districtsCoords );



	//	RETURN

	//	FUNCTIONS
	function initialize() {
		map = new googlemaps.Map(document.getElementById('map-canvas'), {
			zoom: 11,
			center: {lat: 1.317232, lng: 103.840649},
		});
	}

	function addDistrict ( districtPoints, districtName ) {
		var districtCoords = [];
		var point;
		var districtPolygon;
		var i;

		for ( i = 0; i < districtPoints.length; ++i ) {
			point = districtPoints[i];

			districtCoords.push(
				new google.maps.LatLng( point.k, point.D )
			);
		}

		districtPolygon = new google.maps.Polygon({
			paths: districtCoords,
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35
		});

		districtPolygon.setMap( map );

		$scope.districtsCoords[ districtName ] = districtCoords;
		$scope.districtsPolygons[ districtName ] = districtPolygon;

	}

}



}());