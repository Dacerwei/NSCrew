import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
	componentDidUpdate(prevProps) {
			window.scrollTo(0, 0);
	}
	render() {
		return(
			<div id="container">
				<Header />
				{ this.props.children }
				<Footer />
			</div>
		);
	}
}

export default Layout;