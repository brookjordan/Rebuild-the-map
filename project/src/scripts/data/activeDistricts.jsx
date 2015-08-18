var data_hashString = require( '../data/hashString.jsx' );

module.exports = function () {"use strict";

	var rawdata_activeDistricts = !!data_hashString.activeDistricts ?
		data_hashString.activeDistricts.split( ',' ) :
		[];

	var activeDistricts = [];

	for ( var i = 0; i < rawdata_activeDistricts.length; ++i ) {
		if ( +rawdata_activeDistricts[i] && activeDistricts.indexOf( +rawdata_activeDistricts[i] ) === -1 ) {
			activeDistricts.push( +rawdata_activeDistricts[i] );
		}
	}

	return activeDistricts;

}();