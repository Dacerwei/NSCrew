import React from 'react';
import AboutUsHighlight from './AboutUsHighlight';
import PortfolioHighlight from './PortfolioHighlight';
import Classes from './Classes';
import SwingEventsHighlight from './SwingEventsHighlight';
import CoopHighlight from './CoopHighlight';
import Brands from './Brands';

class Highlights extends React.Component{
	render() {
		return(
			<div className="highlights-container">
				<AboutUsHighlight />
				<CoopHighlight />
				<PortfolioHighlight />
				{/*<SwingEventsHighlight />*/}
				<Brands />
			</div>
		);
	}

};

export default Highlights;