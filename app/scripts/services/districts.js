(function(){"use strict";



angular.module( 'map' ).factory( 'districtsService', districtsService );
districtsService.$inject = [ 'googlemaps', 'value_districts' ];


function districtsService ( googlemaps, value_districts ) {
	var districtsService = {};

	var districts = [];
	var map;
	var districtName;





	//	RETURN
	districtsService.init   = initialize;
	districtsService.show   = showDistrict;
	districtsService.hide   = hideDistrict;
	districtsService.toggle = toggleDistrict;
	districtsService.list   = districts;
	return districtsService;

	//	FUNCTIONS
	function initialize( containerElt ) {
		map = new googlemaps.Map( containerElt, {
			zoom: 11,
			center: {lat: 1.317232, lng: 103.840649},
		});

		addDistricts();
	}

	function addDistricts () {
		for ( districtName in value_districts ) {
			addDistrict( value_districts[ districtName ][0].points, districtName );
		}
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

		districts.push({
			polygon: districtPolygon,
			isActive: false
		});

	}

	function showDistrict ( districtPolygonID ) {
		if (    typeof districtPolygonID === 'number'
		     && !districts[ districtPolygonID ].isActive ) {

			districts[ districtPolygonID ].polygon.setMap( map );
			districts[ districtPolygonID ].isActive = true;
		}
	}

	function hideDistrict ( districtPolygonID ) {
		if (    typeof districtPolygonID === 'number'
		     && districts[ districtPolygonID ].isActive ) {

			districts[ districtPolygonID ].polygon.setMap( null );
			districts[ districtPolygonID ].isActive = false;
		}
	}

	function toggleDistrict ( districtPolygonID ) {
		if ( typeof districtPolygonID === 'number' ) {
			if ( districts[ districtPolygonID ].isActive ) {
				hideDistrict ( districtPolygonID );
			} else {
				showDistrict ( districtPolygonID );
			}
		}
	}
}


}());