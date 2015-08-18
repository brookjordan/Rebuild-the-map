var React = require( 'react' );

module.exports = React.createClass({

	render: function() {
		return (
			<li className={ 'placeList__item placeList__item--' + ( this.props.open ? 'open' : 'closed' ) }>

				<div className="placeList__item__district">
					{ this.props.district }
				</div>

				<div className="placeList__item__open"></div>

				{ this.props.name }
			</li>
		);
	},

});