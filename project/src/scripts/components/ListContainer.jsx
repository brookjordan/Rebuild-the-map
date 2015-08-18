var React           = require( 'react' );
var FilterContainer = require( '../components/FilterContainer.jsx' );
var Results         = require( '../components/Results.jsx' );

module.exports = React.createClass({

	render: function() {
		return (
			<div className="listContainer">
				<FilterContainer />
				<Results />
			</div>
		);
	},

});