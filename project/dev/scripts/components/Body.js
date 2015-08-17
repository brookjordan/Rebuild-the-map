"use strict";

var Body = React.createClass({
	displayName: "Body",

	//	Built-ins
	render: function render() {
		return React.createElement(
			"div",
			{ className: "body" },
			React.createElement(MapContainer, null),
			React.createElement(ListContainer, { toggleDistrict: this.toggleDistrict })
		);
	}

});
//# sourceMappingURL=Body.js.map
