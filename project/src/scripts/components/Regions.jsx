var React = require( 'react' );
var Region = require( '../components/Region.jsx' );
var data_activeDistricts = require( '../data/activeDistricts.jsx' );
var data_districts = require( '../data/districts.jsx' );

module.exports = React.createClass({

	render: function() {
		var self = this;

		return (
			<div className="filterListWrapper">
				<ul className="filterList">
					{data_districts.map(function( district ) {
						return (
							<Region name={ district.area }
							        index={ district.id }
							        key={ district.id }
							        activeDistricts={ data_activeDistricts } />
						);
					})}
				</ul>
			</div>
		);
	},

});