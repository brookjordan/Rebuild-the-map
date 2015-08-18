var React           = require( 'react' );
var Body            = require( '../components/Body.jsx' );
var infoLog         = require( '../dev/infoLog.jsx' );
var setRoute        = require( '../app/setRoute.jsx' );

function renderApp ( setBy ) {
	infoLog( 'App render triggered', setBy );

	setRoute();

	React.render(
		<Body />,
		document.getElementById( 'app' )
	);
};

window['renderApp'] = renderApp;
module.exports      = renderApp;