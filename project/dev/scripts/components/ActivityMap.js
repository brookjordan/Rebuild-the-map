"use strict";

var ActivityMap = React.createClass({
	displayName: "ActivityMap",

	map: undefined,

	setMap: function setMap() {
		var self = this;

		try {
			this.map = new google.maps.Map(React.findDOMNode(self), {
				zoom: 11,
				center: { lat: 1.317232, lng: 103.840649 }
			});
		} catch (e) {
			//alert( 'Google maps has not loaded: ' + e );
		}
	},

	//	Builtins
	componentDidMount: function componentDidMount() {
		this.setMap();
	},

	render: function render() {
		return React.createElement("div", { id: "map-canvas",
			className: "map" });
	}

});
//# sourceMappingURL=ActivityMap.js.map
