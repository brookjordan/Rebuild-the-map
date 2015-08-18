var displayMap = {};

(function () {

displayMap.map                  = undefined;
displayMap.buildMap             = buildMap;
displayMap.showDistrict         = showDistrict;
displayMap.hideDistrict         = hideDistrict;
displayMap.buildDistrictDisplay = buildDistrictDisplay;
displayMap.addDistrict          = addDistrict;
displayMap.addDistrictSection   = addDistrictSection;

function buildMap ( elt ) {
	try {
		displayMap.map = new google.maps.Map( elt, {
			zoom: 11,
			center: {lat: 1.317232, lng: 103.840649},
		});

		buildDistrictDisplay();

		for ( var i = 0; i < data_activeDistricts.length; ++i ) {
			showDistrict( data_activeDistricts[i] );
		}

	} catch (e) {
		//alert( 'Google maps has not loaded: ' + e );
	}
}

function showDistrict ( index ) {
	for ( var i = 0; i < data_districts[ index-1 ].data.length; ++i ) {
		data_districts[ index-1 ].data[i].polygon.setMap( displayMap.map );
	}
}

function hideDistrict ( index ) {
	for ( var i = 0; i < data_districts[ index-1 ].data.length; ++i ) {
		data_districts[ index-1 ].data[i].polygon.setMap( null );
	}
}

function buildDistrictDisplay () {
	for ( var i = 0; i < data_districts.length; ++i ) {
		addDistrict( data_districts[ i ] );
	}
}

function addDistrict ( district ) {
	for ( var i = 0; i < district.data.length; ++i ) {
		addDistrictSection( district.data[i] );
	}
}

function addDistrictSection ( districtData ) {
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

}



})();