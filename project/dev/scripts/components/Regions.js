"use strict";

var Regions = React.createClass({
	displayName: "Regions",

	render: function render() {
		var self = this;

		return React.createElement(
			"div",
			{ className: "filterListWrapper" },
			React.createElement(
				"ul",
				{ className: "filterList" },
				data_districts.map(function (district) {
					return React.createElement(Region, { name: district.area,
						index: district.id,
						key: district.id,
						activeDistricts: data_activeDistricts });
				})
			)
		);
	}

});
//# sourceMappingURL=Regions.js.map
