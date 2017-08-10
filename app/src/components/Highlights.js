import React from 'react';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import Classes from '../components/Classes';
import SwingEvents from '../components/SwingEvents';
import CoopHighlight from './CoopHighlight';

class Highlights extends React.Component{

	render() {
		return(
			<div className="highlights-container">
				<AboutUs />
				<CoopHighlight />
				<Portfolio />
				<SwingEvents />
			</div>
		);
	}

};

export default Highlights;