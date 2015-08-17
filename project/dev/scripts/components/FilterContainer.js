"use strict";

var FilterContainer = React.createClass({
	displayName: "FilterContainer",

	toggleExpanded: function toggleExpanded() {
		React.findDOMNode(this).classList.toggle("filterContainer--expanded");
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "filterContainer" },
			React.createElement(
				"h2",
				{ className: "filterTitle f-tiny", onClick: this.toggleExpanded },
				"Filter"
			),
			React.createElement(
				"div",
				{ className: "filterListContainer" },
				React.createElement(Regions, null)
			)
		);
	}

});
//# sourceMappingURL=FilterContainer.js.map
