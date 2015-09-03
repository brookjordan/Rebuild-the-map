import React from 'react';

export default class Result extends React.Component {

	constructor ( props ) {
		super( props );

		this.state = {
			name: '',
		};
	}

	getName () {
		var request = new XMLHttpRequest();
		var requestURL = 'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBDQ1m2bWBeUcsPfkAjddv4DEInbkCzjaE&placeid=' + this.props.place;
		request.addEventListener( 'readystatechange', function ( e ) {
			var DONE = this.DONE || 4;
			if (this.readyState === DONE){
				console.log(this);
			}
		}, false );
		request.open('GET', requestURL, true);
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		//request.send(null);
	}

	updateName () {
		//name
	}

	render () {
		return (
			<li className={ 'placeList__item placeList__item--' + this.props.open }
			    onMouseEnter={ this.getName.bind(this) }
			    >

				<div className="placeList__item__district">
					{ this.props.district }
				</div>

				<div className="placeList__item__open"></div>

				{ this.state.name || this.props.name }
			</li>
		);
	}

}

Result.defaultProps = {
	district:	1,
	name:	    '',
	open:	    0,
	place:	    '',
};

Result.propTypes = {
	district:	React.PropTypes.number,
	name:	    React.PropTypes.string,
	open:	    React.PropTypes.number,
	place:	    React.PropTypes.string,
};