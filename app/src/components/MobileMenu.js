import React from 'react';
import MenuIcon from 'react-icons/lib/fa/bars';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';

class MobileMenu extends React.Component {
	constructor(){
		super();

		this.state = {
			'isOpen': false
		}

		this.onClickIcon = this.onClickIcon.bind(this);
		this.onClickLink = this.onClickLink.bind(this);
	}

	onClickIcon(){
		const {isOpen} = this.state;
		this.setState({
			isOpen: !isOpen,
		});
	}

	onClickLink(){
		this.setState({isOpen: false});
	}

	render(){
		const {isOpen} = this.state;
		return(
			<div className='mobilenav-container'>
				<Drawer
					className='mobilenav-wrapper'
					openSecondary={true}
					open={isOpen} 
					containerStyle={{backgroundColor: 'rgba(0,0,0,0.8)'}}
					width={'100%'}
					height={'100vh'} >
					<ul
						className='mobilenav-linklist-list'>
						<Link
							className='mobilenav-linklist-item'
							to="/about" 
							onClick = { this.onClickLink }
							>
								<li>About Us</li>
						</Link>
						<Link
							className='mobilenav-linklist-item' 
							to="/portfolio" 
							onClick = { this.onClickLink } 
							>
							<li>Portfolio</li>
						</Link>
						<Link
							className='mobilenav-linklist-item' 
							to="/cooperative" 
							onClick = { this.onClickLink } 
							>
							<li>Co-op</li>
						</Link>
						<Link
							className='mobilenav-linklist-item' 
							to="/classes" 
							onClick = { this.onClickLink } 
							>
							<li>Classes</li>
						</Link>
						<Link
							className='mobilenav-linklist-item' 
							to="/swingevents" 
							onClick = { this.onClickLink } 
							>
							<li>Swing Events</li>
						</Link>
					</ul>
				</Drawer>
				{
					!isOpen &&
					<div className="mobilenav-icon-wrapper">
						<MenuIcon onClick={ this.onClickIcon } />
					</div>
				}	
			</div>
		);
	}
}

export default MobileMenu;