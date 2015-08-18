var data_hashString = function () {
	var hashString = {};
	var query = window.location.hash.substring(1);
	var vars = query.split("/");

	for ( var i=1; i<vars.length; ++i ) {
		var pair = vars[i].split("=");

		if (typeof hashString[pair[0]] === "undefined") {
			hashString[pair[0]] = decodeURIComponent2( pair[1] );

		} else if (typeof hashString[pair[0]] === "string") {
			var arr = [ hashString[pair[0]], decodeURIComponent2( pair[1] ) ];
			hashString[pair[0]] = arr;

		} else {
			hashString[pair[0]].push(decodeURIComponent2( pair[1] ));
		}
	}



	return hashString;



	//	FUNCTIONS	//
	function decodeURIComponent2 ( item ) {
		if ( typeof item === 'undefined' ) {
			return true;
		} else {
			return decodeURIComponent( item );
		}
	}
}();