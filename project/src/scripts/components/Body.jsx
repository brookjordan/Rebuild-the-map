import React         from 'react';
import MapContainer  from '../components/MapContainer.jsx';
import ListContainer from '../components/ListContainer.jsx';



export default class Body extends React.Component {

	render() {
		return (
			<div className="body">
				<MapContainer/>
				<ListContainer toggleDistrict={ this.toggleDistrict } />
			</div>
		);
	}

}