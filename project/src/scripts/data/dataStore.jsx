module.exports = function () {
	return {
		store,
		retrieve,
		remove,
		destroyAll,
	}

	//	FUNCTIONS	//
	function store ( dataName, data, storedBy ) {
		if ( !!localStorage ) {
			infoLog( [ 'Data $1 stored', dataName, ], storedBy );

			localStorage.setItem( dataName, JSON.stringify( data ) );
		}
	}

	function retrieve ( dataName, fallback ) {
		if ( !!localStorage ) {
			return JSON.parse( localStorage.getItem( dataName ) );
		}

		return fallback;
	}

	function remove ( dataName, removedBy ) {
		if ( !!localStorage ) {
			infoLog( [ 'Data $1 removed', dataName, ], removedBy );

			localStorage.removeItem( dataName );
		}
	}

	function destroyAll ( destroyedBy ) {
		if ( !!localStorage ) {
			infoLog( 'All data destroyed', destroyedBy );

			localStorage.clear();
		}
	}

}();

