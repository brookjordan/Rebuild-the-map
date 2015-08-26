import React                from 'react';
import Region               from '../components/Region.jsx';
import data_activeDistricts from '../data/activeDistricts.jsx';
import data_districts       from '../data/districts.jsx';



export default class Regions extends React.Component {

	render () {
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
	}

}