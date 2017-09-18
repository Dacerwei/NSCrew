import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import NSLogo from '../components/NSLogo';
import MobileMenu from '../components/MobileMenu'; 
import Menu from '../components/Menu';
import DesktopBreakpoint from '../responsive_utilities/DesktopBreakpoint';
import TabletBreakpoint from '../responsive_utilities/TabletBreakpoint';
import PhoneBreakpoint from '../responsive_utilities/PhoneBreakpoint';

class Layout extends React.Component {
	componentDidUpdate(prevProps) {
			window.scrollTo(0, 0);
	}
	render() {
		return(
			<div id="container">
				<Header>
					<DesktopBreakpoint>
						<nav className="header-container">
							<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
							<Menu />
						</nav>
					</DesktopBreakpoint>
					<TabletBreakpoint>
						<nav className="header-container">
							<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
							<Menu />
						</nav>
					</TabletBreakpoint>
					<PhoneBreakpoint>
						<nav className="mobile-header-container">
							<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
							<MobileMenu />
						</nav>
					</PhoneBreakpoint>
				</Header>
				{ this.props.children }
				<Footer />
			</div>
		);
	}
}

export default Layout;