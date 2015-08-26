import React           from 'react';
import FilterContainer from '../components/FilterContainer.jsx';
import Results         from '../components/Results.jsx';



export default class ListContainer extends React.Component {

	render () {
		return (
			<div className="listContainer">
				<FilterContainer />
				<Results />
			</div>
		);
	}

}