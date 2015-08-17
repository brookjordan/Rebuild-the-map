"use strict";

var Results = React.createClass({
	displayName: "Results",

	sortedResults: function sortedResults() {
		var self = this;

		return data_results

		//	Only need items from the correct districts
		.filter(function (result) {
			if (!data_activeDistricts.length) {
				return true;
			}

			for (var i = 0; i < data_activeDistricts.length; ++i) {
				if (result.district === data_activeDistricts[i]) {
					return true;
				}
			}

			return false;
		}).sort(function (a, b) {
			if (a.open === b.open) {
				if (a.name === b.name) {
					return a.district > b.district ? 1 : -1;
				}

				return a.name > b.name ? 1 : -1;
			}

			if (a.open < b.open) {
				return 1;
			}
			return -1;
		}).map(function (result) {
			return React.createElement(Result, { district: result.district,
				name: result.name,
				open: result.open,
				key: result.id });
		});
	},

	//	Built-ins
	render: function render() {
		return React.createElement(
			"ul",
			{ className: "placeList" },
			this.sortedResults()
		);
	}

});
//# sourceMappingURL=Results.js.map
