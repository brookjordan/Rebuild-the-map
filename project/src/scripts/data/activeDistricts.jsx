import data_hashString from '../data/hashString.jsx';



var data_activeDistricts = [];
var rawdata_activeDistricts = !!data_hashString.activeDistricts ?
	data_hashString.activeDistricts.split( ',' ) :
	[];



for ( var i = 0; i < rawdata_activeDistricts.length; ++i ) {
	if ( +rawdata_activeDistricts[i] && data_activeDistricts.indexOf( +rawdata_activeDistricts[i] ) === -1 ) {
		data_activeDistricts.push( +rawdata_activeDistricts[i] );
	}
}



export default data_activeDistricts;