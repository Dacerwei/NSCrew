import React from 'react';
import { Link } from 'react-router-dom';
import NSLogo from './NSLogo';
import MediaQuery from 'react-responsive';
import MobileMenu from './MobileMenu'; 
import Menu from './Menu';

class Header extends React.Component {
	render() {
		return(
			<div>
			{ this.props.children }
			</div>
		);
	}
}

export default Header;