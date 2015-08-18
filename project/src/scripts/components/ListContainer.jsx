var React           = require( 'react' );
var FilterContainer = require( '../components/FilterContainer.jsx' );
var Results         = require( '../components/Results.jsx' );

var ListContainer = React.createClass({

	render: function() {
		return (
			<div className="listContainer">
				<FilterContainer />
				<Results />
			</div>
		);
	},

});

module.exports = ListContainer;