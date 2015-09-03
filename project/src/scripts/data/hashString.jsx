var hashParameters = {};
var query = window.location.hash.substring(1);
var vars = query.split("/");



for ( var i=1; i<vars.length; ++i ) {
	var pair = vars[i].split("=");

	if (typeof hashParameters[pair[0]] === "undefined") {
		hashParameters[pair[0]] = decodeURIComponent2( pair[1] );

	} else if (typeof hashParameters[pair[0]] === "string") {
		var arr = [ hashParameters[pair[0]], decodeURIComponent2( pair[1] ) ];
		hashParameters[pair[0]] = arr;

	} else {
		hashParameters[pair[0]].push(decodeURIComponent2( pair[1] ));
	}
}



export default hashParameters



//	FUNCTIONS	//
function decodeURIComponent2 ( item ) {
	if ( typeof item === 'undefined' ) {
		return true;
	} else {
		return decodeURIComponent( item );
	}
}