import React from 'react';
import AboutUsHighlight from './AboutUsHighlight';
import PortfolioHighlight from './PortfolioHighlight';
import CoopHighlight from './CoopHighlight';
import Brands from './Brands';

class Highlights extends React.Component{
	render() {
		return(
			<div className="highlights-container">
				<div className="mobile-phone-main">
					<h1 className="mobile-phone-main-slogan focus-in-contract">We're <strong className="naughty">Naughty</strong> so we <strong className="naughty">Swing</strong></h1>
				</div>
				<AboutUsHighlight />
				<CoopHighlight />
				<PortfolioHighlight />
				<Brands />
			</div>
		);
	}

};

export default Highlights;