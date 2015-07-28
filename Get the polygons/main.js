var districts = {};

for ( var i = 1; i < 29; ++i ) {

	doStuff( i );

}

function doStuff ( i ) {
	var ii = pad(i);
	var src = "https://www.99.co/-/get-district-polygons?districts=" + ii;
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = getPointsAndAddItToTheDistrics;
	httpRequest.open( 'GET', src, true );
	httpRequest.send( null );


	//	FUNCTIONS
	function getPointsAndAddItToTheDistrics ( data ) {
		if (httpRequest.readyState === 4) {
			eval( 'districts[ ii ] = ' + httpRequest.responseText );
		}
	}
}

function pad(n) {
  n = n + '';
  return n.length >= 2 ? n : new Array(2 - n.length + 1).join('0') + n;
}