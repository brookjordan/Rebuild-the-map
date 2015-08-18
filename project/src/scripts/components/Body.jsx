var React         = require( 'react' );
var MapContainer  = require( '../components/MapContainer.jsx' );
var ListContainer = require( '../components/ListContainer.jsx' );

var Body = React.createClass({

	//	Built-ins
	render: function() {
		return (
			<div className="body">
				<MapContainer/>
				<ListContainer toggleDistrict={ this.toggleDistrict } />
			</div>
		);
	},

});

module.exports = Body;