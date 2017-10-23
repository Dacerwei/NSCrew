import React from 'react';
import AboutUsHighlight from './AboutUsHighlight';
import PortfolioHighlight from './PortfolioHighlight';
import ClassesHighlight from './ClassesHighlight';
import CoopHighlight from './CoopHighlight';
import Brands from './Brands';

class Highlights extends React.Component{
	render() {
		return(
			<div className="highlights-container">
				<AboutUsHighlight />
				<ClassesHighlight />
				<CoopHighlight />
				<PortfolioHighlight />
				<Brands />
			</div>
		);
	}

};

export default Highlights;