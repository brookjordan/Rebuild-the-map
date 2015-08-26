import React                from 'react';
import Result               from '../components/Result.jsx';
import data_activeDistricts from '../data/activeDistricts.jsx';
import data_results         from '../data/results.jsx';



export default class Results extends React.Component {

	sortedResults () {
		var self = this;

		return data_results

			//	Only need items from the correct districts
			.filter(function( result ) {
				if ( !data_activeDistricts.length ) {
					return true;
				}

				for ( var i=0; i < data_activeDistricts.length; ++i ) {
					if ( result.district === data_activeDistricts[i] ) {
						return true
					}
				}

				return false;
			})

			.sort(function( a, b ){
				if ( a.open === b.open || ( a.open > 0 && b.open > 0 ) ) {
					if ( a.name === b.name ) {
						return a.district > b.district
							? 1 : -1;
					}

					return a.name > b.name
						? 1 : -1;
				}

				if ( a.open < b.open ) {
					return 1;
				}
				return -1;

			})

			.map(function( result ) {
				return (
					<Result district={ result.district }
					        name={ result.name }
					        open={ result.open }
					        place={ result.id }
					        key={ result.id }/>
				)
			});
	}

	render () {
		return (
			<ul className="placeList">
				{ this.sortedResults() }
			</ul>
		);
	}
}