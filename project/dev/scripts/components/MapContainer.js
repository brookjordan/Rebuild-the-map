"use strict";

var MapContainer = React.createClass({
	displayName: "MapContainer",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "mapContainer" },
			React.createElement(Header, null),
			React.createElement(ActivityMap, null)
		);
	}

});
//# sourceMappingURL=MapContainer.js.map
