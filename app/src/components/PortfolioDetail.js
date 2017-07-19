import React from 'react'
import PropTypes from 'prop-types';
import '../../assets/styles/portfolio.css';


class PortfolioDetail extends React.Component {
	render(){
		let { detailTitle, detailInfo } = this.props;
		return(
			<div className="portfoliodetail-container">
				<h1 className="portfoliodetail-title">{ detailTitle }</h1>
				<p className="portfoliodetail-info">{ detailInfo }</p>
			</div>
		);
	}
}

PortfolioDetail.propTypes = {
	detailTitle: PropTypes.string,
	detailInfo: PropTypes.string
};



export default PortfolioDetail;


