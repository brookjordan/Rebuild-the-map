import React       from 'react';
import Header      from '../components/Header.jsx';
import ActivityMap from '../components/ActivityMap.jsx';



export default class MapContainer extends React.Component {

	render() {
		return (
			<div className="mapContainer">
				<Header/>
				<ActivityMap/>
			</div>
		);
	}

}