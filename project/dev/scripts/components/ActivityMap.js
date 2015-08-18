"use strict";

var ActivityMap = React.createClass({
	displayName: "ActivityMap",

	setMap: function setMap() {
		displayMap.buildMap(React.findDOMNode(this));
	},

	//	Builtins
	componentDidMount: function componentDidMount() {
		this.setMap();
	},

	render: function render() {
		return React.createElement("div", { className: "map" });
	}

});
//# sourceMappingURL=ActivityMap.js.map
