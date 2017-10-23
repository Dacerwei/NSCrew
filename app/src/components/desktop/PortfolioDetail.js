import React from 'react'
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';

class PortfolioDetail extends React.Component {
	render() {
		const {
			detailTitle,
			detailInfoCh,
			detailInfoEn,
			youtubeVideoID,
		} = this.props;

		return(
			<div className="portfoliodetail-container">
				<h1 className="portfoliodetail-title">{detailTitle}</h1>
				{
					youtubeVideoID &&
					<Youtube
						videoId={youtubeVideoID}
						id={youtubeVideoID}
						className="portfoliodetail-youtubevideo"
						opts={{
							width: '560px',
							height: '315px',
						}}
					/>
				}
				<p className="portfoliodetail-info">{detailInfoCh}</p>
				<p className="portfoliodetail-info">{detailInfoEn}</p>
			</div>
		);
	}
}

PortfolioDetail.propTypes = {
	detailInfo: PropTypes.string,
	youtubeVideoID: PropTypes.string
};

PortfolioDetail.propTypes = {
	detailTitle: PropTypes.string,
	detailInfoCh: PropTypes.string,
	detailInfoEn: PropTypes.string,
	youtubeVideoID: PropTypes.string,
	onClick: PropTypes.func
};

export default PortfolioDetail;


