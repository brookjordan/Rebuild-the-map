var data_activeDistricts = require( '../data/activeDistricts.jsx' );
var data_districts       = require( '../data/districts.jsx' );
var GoogleMapsLoader     = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyBDQ1m2bWBeUcsPfkAjddv4DEInbkCzjaE';
GoogleMapsLoader.LIBRARIES = [ 'places', 'geometry', ];



var mapDisplay = {
	map:                  undefined,
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
	});
})();

function buildMap ( elt ) {
	GoogleMapsLoader.load(function( _google ){
		google = _google;

		mapDisplay.map = new _google.maps.Map( elt, {
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
	});
}

function buildDistrict ( district ) {
	GoogleMapsLoader.load(function( _google ){

		var districtPolygons = [];


		for ( var i = 0; i < district.data.length; ++i ) {
			districtPolygons.push( decodePath( district.data[i].points ) );
		}

		district.extents = new google.maps.Polygon({
			paths: districtPolygons,
			strokeColor: '#303F9F',
			strokeOpacity: 1,
			strokeWeight: 0.3,
			fillColor: '#303F9F',
			fillOpacity: 0.35
		});
	});
}

function decodePath ( pathURI ) {
	return !google ?
		[] :
		google.maps.geometry.encoding.decodePath( pathURI );
}

module.exports = mapDisplay;