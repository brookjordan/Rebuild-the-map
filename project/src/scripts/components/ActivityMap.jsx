var React      = require( 'react' );
var displayMap = require( '../app/mapDisplay.jsx' );

module.exports = React.createClass({

	setMap: function () {
		displayMap.buildMap( React.findDOMNode( this ) );
	},



	//	Builtins
	componentDidMount: function () {
		this.setMap();
	},

	render: function() {
		return (
			<div className="map"></div>
		);
	},

});