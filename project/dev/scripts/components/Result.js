'use strict';

var Result = React.createClass({
	displayName: 'Result',

	render: function render() {
		return React.createElement(
			'li',
			{ className: 'placeList__item placeList__item--' + (this.props.open ? 'open' : 'closed') },
			React.createElement(
				'div',
				{ className: 'placeList__item__district' },
				this.props.district
			),
			React.createElement('div', { className: 'placeList__item__open' }),
			this.props.name
		);
	}

});
//# sourceMappingURL=Result.js.map
