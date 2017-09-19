import React from 'react';
import PortfolioItemLayout from './PortfolioItemLayout';
import PortfolioSet from '../../helpers/PortfolioSet';

class Portfolio extends React.Component {
	render(){
		return (
			<div className='phone portfolio-container' >
				<PortfolioItemLayout photo_set={ PortfolioSet } />
			</div>
		);
	}
}

export default Portfolio;