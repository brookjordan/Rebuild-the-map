var queryParameters = {};
var query = window.location.search.substring(1);
var vars = !!query ?
	query.split("&") :
	[];



for (var i=0;i<vars.length;i++) {
	var pair = vars[i].split("=");
		// If first entry with this name
	if (typeof queryParameters[pair[0]] === "undefined") {
		queryParameters[pair[0]] = decodeURIComponent(pair[1]);
		// If second entry with this name
	} else if (typeof queryParameters[pair[0]] === "string") {
		var arr = [ queryParameters[pair[0]],decodeURIComponent(pair[1]) ];
		queryParameters[pair[0]] = arr;
		// If third or later entry with this name
	} else {
		queryParameters[pair[0]].push(decodeURIComponent(pair[1]));
	}
}



export default queryParameters;



//	FUNCTIONS	//
function decodeURIComponent2 ( item ) {
	if ( typeof item === 'undefined' ) {
		return true;
	} else {
		decodeURIComponent( item );
	}
}