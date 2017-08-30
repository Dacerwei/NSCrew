import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import NSLogo from './NSLogo';
import MediaQuery from 'react-responsive';
import MobileMenu from './MobileMenu'; 
import Menu from './Menu';

class Layout extends React.Component {
	componentDidUpdate(prevProps) {
			window.scrollTo(0, 0);
	}
	render() {
		return(
			<div id="container">
				<Header>
					<MediaQuery query='(min-width: 768px)'>
						<nav className="header-container">
							<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
							<Menu />
						</nav>
					</MediaQuery>
					<MediaQuery query='(max-width: 768px)'>
						<nav className="mobile-header-container">
							<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
							<MobileMenu />
						</nav>
					</MediaQuery>
				</Header>
				{ this.props.children }
				<Footer />
			</div>
		);
	}
}

export default Layout;