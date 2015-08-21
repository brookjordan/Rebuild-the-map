var fullURLEncode = require( './fullURLEncode.jsx' );

var baseURL = 'https://api.twitter.com';
var method = 'POST';
var parameters = [];
var parameterString = '';
var signatureBaseString = '';

module.exports = buildSignaturebaseString;



//	FUNCTONS	//
function buildSignaturebaseString ( _method, _apiPath, _parameters ) {

	cacheMethod( _method );
	cacheBaseURLAndParameters( _apiPath );
	cacheGivenParameters( _parameters );

	parameters.sort();
	buildParametersString( parameters );
	buildSignatureBaseString( method, baseURL, parameterString );

	return signatureBaseString;

}

function cacheMethod ( _method ) {

	method = _method || method;

}

function cacheBaseURL ( _apiPath ) {

	baseURL += _apiPath;

}

function cacheParameter ( _parameter ) {
	var parameterParts = _parameter.split( '=' );

	if ( typeof parameterParts[1] === 'undefined' ) {
		parameterParts[ 1 ] = 'true';
	}

	parameters.push( fullURLEncode( parameterParts[0] ) + '=' + fullURLEncode( parameterParts[1] ) );
}

function cacheGivenParameters ( _parameters ) {

	var i;

	for ( i in _parameters ) {
		cacheParameter( i +  '=' + _parameters[i] );
	}

}

function cacheBaseURLAndParameters ( _apiPath ) {

	var givenURLParts = _apiPath.split( '?' );

	cacheBaseURL( givenURLParts[0] );

	cacheParameters( givenURLParts[ 1 ] || '' );

}

function cacheParameters ( extraParameters_string ) {

	var extraParameters_array = !!extraParameters_string ?
		extraParameters_string.split( '&' ) :
		[];
	var i;

	for ( i = 0; i < extraParameters_array.length; ++i ) {
		cacheParameter( extraParameters_array[ i ] );
	}

}

function buildParametersString ( parameters ) {
	var i, j;

	if ( !!parameters.length ) {

		for ( i = 0; i < parameters.length; ++i ) {
			parameterString += parameters[i] + '&';
		}

		parameterString = parameterString.slice( 0, -1 );
	}
}

function buildSignatureBaseString ( method, baseURL, parameterString ) {

	signatureBaseString =  method.toUpperCase();
	signatureBaseString += '&';
	signatureBaseString += fullURLEncode( baseURL );
	signatureBaseString += '&';
	signatureBaseString += fullURLEncode( parameterString );

}