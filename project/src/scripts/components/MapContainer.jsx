var React       = require( 'react' );
var Header      = require( '../components/Header.jsx' );
var ActivityMap = require( '../components/ActivityMap.jsx' );

var MapContainer = React.createClass({

	render: function() {
		return (
			<div className="mapContainer">
				<Header/>
				<ActivityMap/>
			</div>
		);
	},

});

module.exports = MapContainer;

