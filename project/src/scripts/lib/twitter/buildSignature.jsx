var buildSignatureBaseString = require( './buildSignatureBaseString.jsx' );
var buildSigningKey = require( './buildSigningKey.jsx' );
var hmacsha1 = require( 'hmacsha1' );

function buildSignature ( method, apiURL, parameters, consumerSecret, oAuthTokenSecret ) {

	var baseString = buildSignatureBaseString( method, apiURL, parameters );

	var signingKey = buildSigningKey( consumerSecret, oAuthTokenSecret );

	return hmacsha1( signingKey, baseString );

}

module.exports = buildSignature;