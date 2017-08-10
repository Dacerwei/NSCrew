import React from 'react';
import AboutUs from '../components/AboutUs';
import PortfolioHighlight from './PortfolioHighlight';
import Classes from '../components/Classes';
import SwingEvents from '../components/SwingEvents';
import CoopHighlight from './CoopHighlight';

class Highlights extends React.Component{

	render() {
		return(
			<div className="highlights-container">
				<AboutUs />
				<CoopHighlight />
				<PortfolioHighlight />
				<SwingEvents />
			</div>
		);
	}

};

export default Highlights;