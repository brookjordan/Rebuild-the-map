function renderApp ( setBy ) {
	infoLog( 'App render triggered', setBy );

	setRoute();

	React.render(
		<Body />,
		document.getElementById( 'app' )
	);
}