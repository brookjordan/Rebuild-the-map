'use strict';

function renderApp(setBy) {
	infoLog('App render triggered', setBy);

	setRoute();

	React.render(React.createElement(Body, null), document.getElementById('app'));
}
//# sourceMappingURL=init.js.map
