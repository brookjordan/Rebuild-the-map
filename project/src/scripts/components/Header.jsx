var React = require( 'react' );

var Header = React.createClass({

	render: function() {
		return (
			<header className="header">
				<h1 className="header__siteTitle f-title">Beans and Beer</h1>
			</header>
		);
	},

});

module.exports = Header;