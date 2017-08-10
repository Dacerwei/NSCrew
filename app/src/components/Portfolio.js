import React from 'react';
import PorfolioItemLayout from './PorfolioItemLayout';
import PortfolioSet from '../helpers/PortfolioSet';

class Portfolio extends React.Component {
	render(){
		return (
			<div className='porfolio-container' >
				<PorfolioItemLayout photo_set={ PortfolioSet } />
			</div>
		);
	}
}

export default Portfolio;