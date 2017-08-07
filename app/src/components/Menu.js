import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaIcons from './MediaIcons';

const Menu = () => {
	return(
		<nav className="default-menu-container">
			<ul className="default-menu-list">
				<NavLink to="/about" className='default-menu-item'>
					<li className='default-menu-item-content'>About Us</li>
				</NavLink>
				<NavLink to="/portfolio" className='default-menu-item'>
					<li className='default-menu-item-content'>Portfolio</li>
				</NavLink>
				<NavLink to="/cooperative" className='default-menu-item'>
					<li className='default-menu-item-content'>Co-op</li>
				</NavLink>
				<NavLink to="/classes" className='default-menu-item'>
					<li className='default-menu-item-content'>Classes</li>
				</NavLink>
				<NavLink to="/swingevents" className='default-menu-item'>
					<li className='default-menu-item-content'>Swing Events</li>
				</NavLink>
			</ul>
			<MediaIcons />
		</nav>
	);
}

export default Menu;