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
				<Classes />
				<Portfolio />
				<Cooperative />
				<SwingEvents />
			</div>
		);
	}

};

export default Highlights;