import React from 'react';
import MenuIcon from 'react-icons/lib/fa/bars';
import { Link } from 'react-router';

class MobileMenu extends React.Component {
	constructor(){
		super();

		this.state = {
			'isMenuOpen': false
		}

		this.onClickIcon = this.onClickIcon.bind(this);
		this.onClickLink = this.onClickLink.bind(this);
	}

	onClickIcon(){
		this.setState(prevState => ({
			isMenuOpen: !prevState.isMenuOpen
		}));
	}

	onClickLink(){
		this.setState({isMenuOpen: false});
	}

	render(){
		return(
			<div className="mobile-menu-wrapper">
				<div className={ this.state.isMenuOpen ? "mobile-menu open" : "mobile-menu" } >
					<ul className="mobile-menu-list">
						<Link to="/about" onClick = { this.onClickLink } ><li>About Us</li></Link>
						<Link to="/showcases" onClick = { this.onClickLink } ><li>Showcases</li></Link>
						<Link to="/cooperative" onClick = { this.onClickLink } ><li>Co-op</li></Link>
						<Link to="/swingevents" onClick = { this.onClickLink } ><li>Swing Events</li></Link>
					</ul>
				</div>
				<div id="mobile-menu-icon" className={ this.state.isMenuOpen ? "open": ""} >
					<MenuIcon onClick={ this.onClickIcon } />
				</div>
			</div>
		);
	}
}

export default MobileMenu;