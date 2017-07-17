import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaIcons from './MediaIcons';


const Menu = () => {
	return(
		<nav className="menu-wrapper">
			<ul className="menu-list">
				<NavLink to="/about" ><li>About Us</li></NavLink>
				<NavLink to="/portfolio" ><li>Portfolio</li></NavLink>
				<NavLink to="/cooperative" ><li>Co-op</li></NavLink>
				<NavLink to="/classes" ><li>Classes</li></NavLink>
				<NavLink to="/swingevents" ><li>Swing Events</li></NavLink>
			</ul>
			<MediaIcons />
		</nav>
	);
}

export default Menu;