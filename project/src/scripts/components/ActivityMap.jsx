var React      = require( 'react' );
var mapDisplay = require( '../app/mapDisplay.jsx' );

var ActivityMap = React.createClass({

	//	Builtins
	componentDidMount: function () {
		mapDisplay.buildMap( React.findDOMNode( this ) );
	},

	render: function() {
		return (
			<div className="map"></div>
		);
	},

});

module.exports = ActivityMap;