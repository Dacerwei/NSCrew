import React from 'react';
import { Link } from 'react-router-dom';
import NSLogo from './NSLogo';
import MediaQuery from 'react-responsive';
import MobileMenu from './MobileMenu'; 
import Menu from './Menu';

class Header extends React.Component {
	constructor(){
		super();
	}
	
	render() {
		return(
			<nav className="header-container">
				<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
				<MediaQuery query='(min-width: 768px)'>
					<Menu />
				</MediaQuery>
				<MediaQuery query='(max-width: 768px)'>
					<MobileMenu />
				</MediaQuery>
			</nav>
		);
	}
}

export default Header;