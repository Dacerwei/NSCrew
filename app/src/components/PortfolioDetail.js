import React from 'react'
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';

class PortfolioDetail extends React.Component {
	render() {
		const { 
			detailInfo,
			youtubeVideoID,
		} = this.props;

		return(
			<div className="portfoliodetail-container">
				<p className="portfoliodetail-info">{ detailInfo }</p>
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
			</div>
		);
	}
}

PortfolioDetail.propTypes = {
	detailInfo: PropTypes.string,
	youtubeVideoID: PropTypes.string
};



export default PortfolioDetail;


