var fullURLEncode = require( './fullURLEncode.jsx' );

module.exports = buildSigningKey;



//	FUNCTIONS	//
function buildSigningKey ( consumerSecret, oAuthTokenSecret ) {
	return fullURLEncode( consumerSecret ) + '&' + fullURLEncode( oAuthTokenSecret );
}