var renderApp       = require( '../app/renderApp.jsx' );
var DATA            = require( '../data/dataStore.jsx' );
var data_hashString = require( '../data/hashString.jsx' );
var twitter         = require( '../lib/twitter/twitter.jsx' );



if ( !!data_hashString.clearLocalStorage ) {
	DATA.destroyAll( 'URL request' );
}

window.renderApp = renderApp;

renderApp( 'site initialisation' );

//	console.log(twitter.buildSignature(
//		'POST',
//		'/1/statuses/update.json?include_entities=true',
//		{
//			status: 'Hello Ladies + Gentlemen, a signed OAuth request!',
//			oauth_consumer_key: 'xvz1evFS4wEEPTGEFPHBog',
//			oauth_nonce: 'kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg',
//			oauth_signature_method: 'HMAC-SHA1',
//			oauth_timestamp: '1318622958',
//			oauth_token: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
//			oauth_version: '1.0'
//		},
//
//		'kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw',
//		'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE'
//	));