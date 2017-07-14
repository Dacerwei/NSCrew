import React from 'react';
import { Link } from 'react-router';
import MediaIcons from './MediaIcons';


const Menu = () => {
	return(
		<nav className="menu-wrapper">
			<ul className="menu-list">
				<Link to="/about" ><li>About Us</li></Link>
				<Link to="/showcases" ><li>Showcases</li></Link>
				<Link to="/cooperative" ><li>Co-op</li></Link>
				<Link to="/swingevents" ><li>Swing Events</li></Link>
			</ul>
			<MediaIcons />
		</nav>
	);
}

export default Menu;