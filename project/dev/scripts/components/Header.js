"use strict";

var Header = React.createClass({
	displayName: "Header",

	render: function render() {
		return React.createElement(
			"header",
			{ className: "header" },
			React.createElement(
				"h1",
				{ className: "header__siteTitle f-title" },
				"Beans and Beer"
			)
		);
	}

});
//# sourceMappingURL=Header.js.map
