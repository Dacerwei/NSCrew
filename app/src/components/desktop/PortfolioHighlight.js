import React from 'react';
import PortfolioSet from '../../helpers/PortfolioSet';
import PortfolioItemLayout from './PortfolioItemLayout';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PortfolioHighlight extends React.Component {
	render() {
		let highlightPortfolioItems = _.take(PortfolioSet, 3);
		return(
			<section className="portfoliohighlight-container">
				<h2 className="portfoliohighlight-title">
					Portfolio | 作品集
				</h2>
				<div className="portfoliohighlight-portfolio-wrapper">
					<PortfolioItemLayout photo_set={highlightPortfolioItems} />
				</div>
				<div className="portfoliohighlight-more-btn-wrapper">
					<Link className="portfoliohighlight-more-btn" to="portfolio"><RaisedButton label={'MORE'} primary={true}/></Link>
				</div>
			</section>
		);
	}
}

export default PortfolioHighlight;