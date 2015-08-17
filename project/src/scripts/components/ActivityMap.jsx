var ActivityMap = React.createClass({

	map: undefined,

	setMap: function () {
		var self = this;

		try {
			this.map = new google.maps.Map(  React.findDOMNode( self ), {
				zoom: 11,
				center: { lat: 1.317232, lng: 103.840649 },
			});

		} catch (e) {
			//alert( 'Google maps has not loaded: ' + e );
		}
	},



	//	Builtins
	componentDidMount: function () {
		this.setMap();
	},

	render: function() {
		return (
			<div id="map-canvas"
			     className="map"></div>
		);
	},

});

