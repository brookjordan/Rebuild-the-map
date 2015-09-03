import React    from 'react';
import Body     from '../components/Body.jsx';
import infoLog  from '../dev/infoLog.jsx';
import setRoute from '../app/setRoute.jsx';

export default function renderApp ( setBy ) {
	infoLog( 'App render triggered', setBy );

	setRoute();

	React.render(
		<Body />,
		document.getElementById( 'app' )
	);
}