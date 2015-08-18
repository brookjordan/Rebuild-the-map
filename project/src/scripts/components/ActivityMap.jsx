var ActivityMap = React.createClass({

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