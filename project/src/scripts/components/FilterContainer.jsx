import React from 'react';
import Regions from '../components/Regions.jsx';



export default class FilterContainer extends React.Component {

	toggleExpanded () {
		React.findDOMNode( this ).classList.toggle( "filterContainer--expanded" );
	}

	render () {
		return (
			<div className="filterContainer">
				<h2 className="filterTitle f-tiny" onClick={ this.toggleExpanded.bind(this) }>
					Filter
				</h2>
				<div className="filterListContainer">
					<Regions />
				</div>
			</div>
		);
	}

}