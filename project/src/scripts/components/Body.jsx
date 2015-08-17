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