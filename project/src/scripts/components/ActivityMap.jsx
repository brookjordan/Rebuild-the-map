import React from 'react';
import mapDisplay from '../app/mapDisplay.jsx';



export default class ActivityMap extends React.Component {

	componentDidMount () {
		mapDisplay.buildMap( React.findDOMNode( this ) );
	}

	render () {
		return (
			<div className="map"></div>
		);
	}

}