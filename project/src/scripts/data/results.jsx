//	{
//		district: 3,
//		name: "McDonalds",
//		open: true,
//		id: random36(),
//	},

var data_results = [];

(function () {
	var stringData_results = retrieveData( 'data_results', [] );
	var rawData_results = [];
	var foundIDs = [];

	if ( !!stringData_results ) {
		rawData_results = stringData_results;

		if ( !!rawData_results.length ) {
			for ( var i = 0; i < rawData_results.length; ++i ) {
				sanitiseDataItem( rawData_results[i] );
			}
		}
	}

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

			data_results.push( sanitisedItem );
			foundIDs.push( sanitisedItem.id );
		}

	}

})();

//	FUNCTIONS	//
function addRandomResult () {
	data_results.push({
		district: Math.ceil(Math.random()*28),
		name: (Math.floor(Math.random()*26)+10).toString( 36 ).toUpperCase() + (Math.floor(Math.random()*26)+10).toString( 36 ) + (Math.floor(Math.random()*26)+10).toString( 36 ) + (Math.floor(Math.random()*26)+10).toString( 36 ),
		open: Math.random()>0.167,
		id: (Math.random()*9e9 * Math.random()*9e9 * Math.random()*9e9).toString( 36 ),
	});

	storeData( 'data_results', data_results, 'adding a random result' );
	renderApp( 'adding a random result' );
}