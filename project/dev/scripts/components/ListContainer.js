"use strict";

var ListContainer = React.createClass({
	displayName: "ListContainer",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "listContainer" },
			React.createElement(FilterContainer, null),
			React.createElement(Results, null)
		);
	}

});
//# sourceMappingURL=ListContainer.js.map
