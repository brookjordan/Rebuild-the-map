var renderApp       = require( '../app/renderApp.jsx' );
var DATA            = require( '../data/dataStore.jsx' );
var data_hashString = require( '../data/hashString.jsx' );
var data_results    = require( '../data/results.jsx' );

if ( !!data_hashString.clearLocalStorage ) {
	DATA.destroy( 'URL request' );
}

window.renderApp = renderApp;

renderApp( 'site initialisation' );

window.addRandomResult = function () {
	data_results.push({
		district: Math.ceil(Math.random()*28),
		name: (Math.floor(Math.random()*26)+10).toString( 36 ).toUpperCase() + (Math.floor(Math.random()*26)+10).toString( 36 ) + (Math.floor(Math.random()*26)+10).toString( 36 ) + (Math.floor(Math.random()*26)+10).toString( 36 ),
		open: Math.random()>0.167,
		id: (Math.random()*9e9 * Math.random()*9e9 * Math.random()*9e9).toString( 36 ),
	});

	DATA.store( 'data_results', data_results, 'adding a random result' );
	renderApp( 'adding a random result' );
}