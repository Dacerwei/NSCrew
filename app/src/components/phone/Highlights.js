import React from 'react';
import AboutUsHighlight from './AboutUsHighlight';
import PortfolioHighlight from './PortfolioHighlight';
import CoopHighlight from './CoopHighlight';
import ClassesHighlight from './ClassesHighlight';
import Brands from './Brands';

class Highlights extends React.Component{
	render() {
		return(
			<div className="highlights-container">
				<div className="main-slogan-wrapper">
					<h1 className="main-slogan focus-in-contract">We're <strong className="naughty">Naughty</strong> so we <strong className="naughty">Swing</strong></h1>
				</div>
				<ClassesHighlight />
				<AboutUsHighlight />
				<CoopHighlight />
				<PortfolioHighlight />
				<Brands />
			</div>
		);
	}

};

export default Highlights;