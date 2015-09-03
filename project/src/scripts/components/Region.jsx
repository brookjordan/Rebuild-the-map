import React      from 'react';
import renderApp  from '../app/renderApp.jsx';
import displayMap from '../app/mapDisplay.jsx';
import data_activeDistricts from '../data/activeDistricts.jsx';



export default class Region extends React.Component {

	toggleDistrict () {
		if ( data_activeDistricts.indexOf( this.props.district ) === -1 ) {
			data_activeDistricts.push( this.props.district );
			displayMap.showDistrict( this.props.district );
			renderApp( 'toggling region ' + this.props.district + ' on' );
		} else {
			data_activeDistricts.splice( data_activeDistricts.indexOf( this.props.district ), 1 );
			displayMap.hideDistrict( this.props.district );
			renderApp( 'toggling region ' + this.props.district + ' off' );
		}
	}

	render () {
		return (
			<li className={ "filterList__district" + ( data_activeDistricts.indexOf( this.props.district ) > -1 ? " filterList__district--active" : "" ) }
			    onClick={ this.toggleDistrict.bind(this) }>
				<abbr className="filterList__district__name">{ this.props.name }</abbr>
				<span className="filterList__district__index" title={ this.props.name }>{ this.props.district }</span>
			</li>
		);
	}

}