var Regions = React.createClass({

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