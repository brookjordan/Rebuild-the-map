import React                from 'react';
import Region               from '../components/Region.jsx';
import data_districts       from '../data/districts.jsx';



export default class Regions extends React.Component {

	render () {
		return (
			<div className="filterListWrapper">
				<ul className="filterList">
					{data_districts.map(function( district ) {
						return (
							<Region name={ district.area }
							        district={ district.id }
							        key={ district.id } />
						);
					})}
				</ul>
			</div>
		);
	}

}