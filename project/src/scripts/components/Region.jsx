var Region = React.createClass({

	toggleDistrict: function () {
		if ( this.props.activeDistricts.indexOf( this.props.index ) === -1 ) {
			this.props.activeDistricts.push( this.props.index );
			renderApp( 'toggling region ' + this.props.index + ' on' );
		} else {
			this.props.activeDistricts.splice( this.props.activeDistricts.indexOf( this.props.index ), 1 );
			renderApp( 'toggling region ' + this.props.index + ' off' );
		}
	},



	//	Builtins
	render: function() {
		return (
			<li className={ "filterList__district" + ( this.props.activeDistricts.indexOf( this.props.index ) > -1 ? " filterList__district--active" : "" ) }
			    onClick={ this.toggleDistrict }>
				<span className="filterList__district__name">{ this.props.name }</span>
				<span className="filterList__district__index">{ this.props.index }</span>
			</li>
		);
	},

});