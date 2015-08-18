'use strict';

var Region = React.createClass({
	displayName: 'Region',

	toggleDistrict: function toggleDistrict() {
		if (this.props.activeDistricts.indexOf(this.props.index) === -1) {
			this.props.activeDistricts.push(this.props.index);
			displayMap.showDistrict(this.props.index);
			renderApp('toggling region ' + this.props.index + ' on');
		} else {
			this.props.activeDistricts.splice(this.props.activeDistricts.indexOf(this.props.index), 1);
			displayMap.hideDistrict(this.props.index);
			renderApp('toggling region ' + this.props.index + ' off');
		}
	},

	//	Builtins
	render: function render() {
		return React.createElement(
			'li',
			{ className: "filterList__district" + (this.props.activeDistricts.indexOf(this.props.index) > -1 ? " filterList__district--active" : ""),
				onClick: this.toggleDistrict },
			React.createElement(
				'span',
				{ className: 'filterList__district__name' },
				this.props.name
			),
			React.createElement(
				'span',
				{ className: 'filterList__district__index' },
				this.props.index
			)
		);
	}

});
//# sourceMappingURL=Region.js.map
