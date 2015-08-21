var fullURLEncode = require( './fullURLEncode.jsx' );

module.exports = buildSigningKey;



//	FUNCTIONS	//
function buildSigningKey ( consumerSecret, _oAuthTokenSecret ) {
	return fullURLEncode( consumerSecret ) + '&' + fullURLEncode( oAuthTokenSecret || '' );
}