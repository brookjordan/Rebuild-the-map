var React = require( 'react' );

var Result = React.createClass({

	getName: function () {
		var request = new XMLHttpRequest();
		var requestURL = 'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBDQ1m2bWBeUcsPfkAjddv4DEInbkCzjaE&placeid=' + this.props.place;
		request.onreadystatechange = function ( e ) {
			var DONE = this.DONE || 4;
			if (this.readyState === DONE){
				console.log(this);
			}
		};
		request.open('GET', requestURL, true);
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		request.send(null);
	},

	updateName: function () {
		//name
	},

	getInitialState: function () {
		return {
			name: '',
		};
	},

	render: function() {
		return (
			<li className={ 'placeList__item placeList__item--' + this.props.open }
			    onMouseEnter={ this.getName }
			    >

				<div className="placeList__item__district">
					{ this.props.district }
				</div>

				<div className="placeList__item__open"></div>

				{ this.state.name || this.props.name }
			</li>
		);
	},

});

module.exports = Result;