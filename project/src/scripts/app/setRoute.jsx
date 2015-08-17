function setRoute () {
	//	location.origin + location.pathname

	var params = [];
	var paramsString = '#';

	addParam( buildParam_activeDistricts() );
	addParam( buildParam_clearLocalStorage() );

	if ( false && window.history && window.history.replaceState ) {
		history.replaceState( null, null, location.origin + location.pathname + location.search + paramsString );
	} else {
		location.href = location.origin + location.pathname + location.search + paramsString;
	}





	//	FUNCTIONS	//
	function buildParam_activeDistricts () {
		var districtsParam = '';

		for ( var i = 0; i < data_activeDistricts.length; ++i ) {
			if ( !i ) {
				districtsParam += 'activeDistricts=';
			} else {
				districtsParam += ',';
			}
			districtsParam += data_activeDistricts[i];
		}

		return districtsParam;
	}
	function buildParam_clearLocalStorage () {
		if ( data_hashString.clearLocalStorage ) {
			return 'clearLocalStorage';
		}

		return '';
	}

	function addParam ( param ) {
		if ( !!param ) {
			paramsString += '/' + param;
		}
	}
}