import fullURLEncode from './fullURLEncode.jsx';

export default function buildSigningKey ( consumerSecret, oAuthTokenSecret ) {
	return fullURLEncode( consumerSecret ) + '&' + fullURLEncode( oAuthTokenSecret || '' );
}