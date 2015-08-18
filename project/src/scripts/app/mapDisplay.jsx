var data_activeDistricts = require( '../data/activeDistricts.jsx' );
var data_districts       = require( '../data/districts.jsx' );
var GoogleMapsLoader     = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyBDQ1m2bWBeUcsPfkAjddv4DEInbkCzjaE';
GoogleMapsLoader.LIBRARIES = [ 'places', ];



var mapDisplay = {
	map:                  undefined,
	buildMap:             buildMap,
	showDistrict:         showDistrict,
	hideDistrict:         hideDistrict,
	buildDistrictDisplay: buildDistrictDisplay,
	addDistrict:          addDistrict,
	addDistrictSection:   addDistrictSection,
};



function buildMap ( elt ) {
	GoogleMapsLoader.load(function(google){
		mapDisplay.map = new google.maps.Map( elt, {
			zoom: 11,
			center: {lat: 1.317232, lng: 103.840649},
		});

		buildDistrictDisplay();

		for ( var i = 0; i < data_activeDistricts.length; ++i ) {
			showDistrict( data_activeDistricts[i] );
		}
	});
}

function showDistrict ( index ) {
	GoogleMapsLoader.load(function(google){
		for ( var i = 0; i < data_districts[ index-1 ].data.length; ++i ) {
			data_districts[ index-1 ].data[i].polygon.setMap( mapDisplay.map );
		}
	});
}

function hideDistrict ( index ) {
	GoogleMapsLoader.load(function(google){
		for ( var i = 0; i < data_districts[ index-1 ].data.length; ++i ) {
			data_districts[ index-1 ].data[i].polygon.setMap( null );
		}
	});
}

function buildDistrictDisplay () {
	GoogleMapsLoader.load(function(google){
		for ( var i = 0; i < data_districts.length; ++i ) {
			addDistrict( data_districts[ i ] );
		}
	});
}

function addDistrict ( district ) {
	GoogleMapsLoader.load(function(google){
		for ( var i = 0; i < district.data.length; ++i ) {
			addDistrictSection( district.data[i] );
		}
	});
}

function addDistrictSection ( districtData ) {
	GoogleMapsLoader.load(function(google){
		var districtPoints = districtData.points;
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
			strokeColor: '#303F9F',
			strokeOpacity: 1,
			strokeWeight: 0.3,
			fillColor: '#303F9F',
			fillOpacity: 0.35
		});

		districtData.polygon = districtPolygon;
	});

}

module.exports = mapDisplay;