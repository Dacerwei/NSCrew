import React from 'react';
import { Link } from 'react-router-dom';
import NSLogo from './NSLogo';
import MediaQuery from 'react-responsive';
import MobileMenu from './MobileMenu'; 
import Menu from './Menu';

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			'isActive': false
		};

		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll(){
		if(document.body.scrollTop > 75) {
			this.setState({ isActive: true });
		} else if(document.body.scrollTop <= 75){
			this.setState({ isActive: false });
		}
	}

	render() {
		return(
			<header className= { this.state.isActive ? "header-container active" : "header-container" } >
				<div className="logo-container"><Link to="/"><NSLogo /></Link></div>
				<MediaQuery query='(min-width: 768px)'>
					<Menu />
				</MediaQuery>
				<MediaQuery query='(max-width: 768px)'>
					<MobileMenu />
				</MediaQuery>
			</header>
		);
	}
}

export default Header;