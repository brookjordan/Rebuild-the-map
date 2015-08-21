var React      = require( 'react' );
var renderApp  = require( '../app/renderApp.jsx' );
var displayMap = require( '../app/mapDisplay.jsx' );

var Region = React.createClass({

	toggleDistrict: function () {
		if ( this.props.activeDistricts.indexOf( this.props.index ) === -1 ) {
			this.props.activeDistricts.push( this.props.index );
			displayMap.showDistrict( this.props.index );
			window.renderApp( 'toggling region ' + this.props.index + ' on' );
		} else {
			this.props.activeDistricts.splice( this.props.activeDistricts.indexOf( this.props.index ), 1 );
			displayMap.hideDistrict( this.props.index );
			window.renderApp( 'toggling region ' + this.props.index + ' off' );
		}
	},



	//	Builtins
	render: function() {
		return (
			<li className={ "filterList__district" + ( this.props.activeDistricts.indexOf( this.props.index ) > -1 ? " filterList__district--active" : "" ) }
			    onClick={ this.toggleDistrict }>
				<abbr className="filterList__district__name">{ this.props.name }</abbr>
				<span className="filterList__district__index" title={ this.props.name }>{ this.props.index }</span>
			</li>
		);
	},

});

module.exports = Region;