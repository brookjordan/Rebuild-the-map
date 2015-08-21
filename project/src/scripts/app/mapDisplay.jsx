var data_activeDistricts = require( '../data/activeDistricts.jsx' );
var data_districts       = require( '../data/districts.jsx' );
var GoogleMapsLoader     = require('google-maps');
var data_results         = require( '../data/results.jsx' );
var infoLog              = require( '../dev/infoLog.jsx' );

GoogleMapsLoader.KEY = 'AIzaSyBDQ1m2bWBeUcsPfkAjddv4DEInbkCzjaE';
GoogleMapsLoader.VERSION = '3.14';
GoogleMapsLoader.LIBRARIES = [ 'places', 'geometry', ];
GoogleMapsLoader.SENSOR = true;
GoogleMapsLoader.LANGUAGE = 'en';



var mapDisplay = {
	map:                  undefined,
	service:              undefined,
	buildMap,
	showDistrict,
	hideDistrict,
	buildDistrictDisplay,
	buildDistrict,
};
var google;


(function getGoogle () {
	GoogleMapsLoader.load(function( _google ){
		google = _google;
		mapDisplay.bounds = new google.maps.LatLngBounds();
	});
})();

function buildMap ( elt ) {
	GoogleMapsLoader.load(function( _google ){
		google = _google;

		mapDisplay.map = new _google.maps.Map( elt, {
			zoom: 11,
			center: {lat: 1.317232, lng: 103.840649},
		});
		mapDisplay.service = new google.maps.places.PlacesService( mapDisplay.map );

		buildDistrictDisplay();

		for ( var i = 0; i < data_activeDistricts.length; ++i ) {
			showDistrict( data_activeDistricts[i] );
		}
	});
}

function showDistrict ( index ) {
	GoogleMapsLoader.load(function( _google ){
		data_districts[ index-1 ].extents.setMap( mapDisplay.map );
	});
}

function hideDistrict ( index ) {
	GoogleMapsLoader.load(function( _google ){
		data_districts[ index-1 ].extents.setMap( null );
	});
}

function buildDistrictDisplay () {
	GoogleMapsLoader.load(function( _google ){
		for ( var i = 0; i < data_districts.length; ++i ) {
			buildDistrict( data_districts[ i ] );
		}

		mapDisplay.service.textSearch({ // textSearch radarSearch
			bounds: mapDisplay.bounds,
			//name: "McDonald's",
			query: "McDonald's",

		}, function( results, status ){

			(results||[]).forEach(function( result, index, array ){
				var districtID = 0;

				do {
					++districtID;
				} while ( !google.maps.geometry.poly.containsLocation( result.geometry.location, data_districts[ districtID ].extents) && districtID < data_districts.length - 1 );

				data_results.push({
					district: districtID,
					name: result.name || result.place_id,
					open: result.opening_hours ?
						result.opening_hours.open_now ?
							2 :	//	open
							0 :	//	closed
							1,	//	not sure
					closes: '',
					id: result.place_id,
				});
			});

			//	DATA.store( 'data_results', data_results, 'adding a random result' );
			renderApp( 'google places update' );
		});
	});
}

function buildDistrict ( district ) {
	GoogleMapsLoader.load(function( _google ){

		var districtPolygons = [];
		var districtPolygon;
		var i, j;

		district.bounds = new google.maps.LatLngBounds();

		for ( i = 0; i < district.data.length; ++i ) {
			districtPolygon = decodePath( district.data[i].points );
			districtPolygons.push( districtPolygon );

			for ( j = 0; j < districtPolygon.length; ++j ) {
				district.bounds.extend( districtPolygon[j] );
				mapDisplay.bounds.extend( districtPolygon[j] );
			}
		}

		district.extents = new google.maps.Polygon({
			paths: districtPolygons,
			strokeColor: '#303F9F',
			strokeOpacity: 1,
			strokeWeight: 0.3,
			fillColor: '#303F9F',
			fillOpacity: 0.35
		});

		district.bounds = district.bounds;

//		district.centre = district.bounds.getCenter();
//		district.diameter = google.maps.geometry.spherical.computeLength( [ districtBounds.toSpan(), new google.maps.LatLng( 0, 0 ) ] );
//		district.radius = district.diameter / 2;
	});
}

function decodePath ( pathURI ) {
	return !google ?
		[] :
		google.maps.geometry.encoding.decodePath( pathURI );
}

module.exports = mapDisplay;