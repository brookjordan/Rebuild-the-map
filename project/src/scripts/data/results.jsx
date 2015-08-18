var DATA         = require( '../data/dataStore.jsx' );
var data_results = require( '../data/results.jsx' );

//	{
//		district: 3,
//		name: "McDonalds",
//		open: true,
//		id: random36(),
//	},

module.exports = function () {
	var stringData_results = DATA.retrieve( 'data_results', [] );
	var rawData_results = [];
	var foundIDs = [];
	var results = [];

	if ( !!stringData_results ) {
		rawData_results = stringData_results;

		if ( !!rawData_results.length ) {
			for ( var i = 0; i < rawData_results.length; ++i ) {
				sanitiseDataItem( rawData_results[i] );
			}
		}
	}

	return results;



	//	FUNCTIONS	//
	function sanitiseDataItem ( item ) {
		var sanitisedItem = {
			district: +item.district || NaN,
			name: '' + item.name || '',
			open: item.open === 'false' ?
				false :
				!!item.open,
			id: '' + item.id,
		};

		if ( !isNaN( sanitisedItem.district ) && sanitisedItem.district > 0) {
			while ( foundIDs.indexOf( sanitisedItem.id ) > -1 ) {
				sanitisedItem.id += Math.floor( Math.random()*10 );
			}

			results.push( sanitisedItem );
			foundIDs.push( sanitisedItem.id );
		}

	}

}();