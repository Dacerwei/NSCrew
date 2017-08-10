import React from 'react';
import PortfolioSet from '../helpers/PortfolioSet';
import PorfolioItemLayout from './PorfolioItemLayout';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import _ from 'lodash';

class PortfolioHighlight extends React.Component {
	render() {
		let highlightPortfolioItems = _.take(PortfolioSet, 3);
		return(
			<section className="portfoliohighlight-container">
				<h1 className="portfoliohighlight-title">
					Portfolio || 作品集
				</h1>
				<div className="portfoliohighlight-portfolio-wrapper">
					<PorfolioItemLayout photo_set={highlightPortfolioItems} />
				</div>
				<Link to="portfolio"><RaisedButton label={'MORE'} primary={true} className="portfoliohighlight-more-btn"/></Link>
			</section>
		);
	}
}

export default PortfolioHighlight;