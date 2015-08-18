var React           = require( 'react' );
var Body            = require( '../components/Body.jsx' );
var infoLog         = require( '../dev/infoLog.jsx' );
var setRoute        = require( '../app/setRoute.jsx' );
var DATA            = require( '../data/dataStore.jsx' );
var data_hashString = require( '../data/hashString.jsx' );




if ( !!data_hashString.clearLocalStorage ) {
	DATA.destroy( 'URL request' );
}

window.renderApp = function ( setBy ) {
	infoLog( 'App render triggered', setBy );

	setRoute();

	React.render(
		<Body />,
		document.getElementById( 'app' )
	);
}