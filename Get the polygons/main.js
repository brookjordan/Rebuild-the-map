var districts = {};

for ( var i = 1; i < 29; ++i ) {

	doStuff( i );

}

function doStuff ( i ) {
	var src = "https://www.99.co/-/get-district-polygons?districts=" + i;
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = getPointsAndAddItToTheDistrics;
	httpRequest.open( 'GET', src, true );
	httpRequest.send( null );

	console.log( 'Requesting: ' + src );


	//	FUNCTIONS
	function getPointsAndAddItToTheDistrics ( data ) {
		if (httpRequest.readyState === 4) {
			districts[ pad(i) ] = httpRequest;
		}
	}
}

function pad(n) {
  n = n + '';
  return n.length >= 2 ? n : new Array(2 - n.length + 1).join('0') + n;
}