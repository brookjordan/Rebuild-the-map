var React   = require( 'react' );
var Regions = require( '../components/Regions.jsx' );

module.exports = React.createClass({

	toggleExpanded: function () {
		React.findDOMNode( this ).classList.toggle( "filterContainer--expanded" );
	},

	render: function() {
		return (
			<div className="filterContainer">
				<h2 className="filterTitle f-tiny" onClick={ this.toggleExpanded }>
					Filter
				</h2>
				<div className="filterListContainer">
					<Regions />
				</div>
			</div>
		);
	},

});