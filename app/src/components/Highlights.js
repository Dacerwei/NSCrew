import React from 'react';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import Classes from '../components/Classes';
import Cooperative from '../components/Cooperative';
import SwingEvents from '../components/SwingEvents';

class Highlights extends React.Component{

	render() {
		return(
			<div className="highlights-container">
				<AboutUs />
				<Cooperative />
				<Classes />
				<Portfolio />
				<SwingEvents />
			</div>
		);
	}

};

export default Highlights;