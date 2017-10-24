import React from 'react'
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import FlatButton from 'material-ui/FlatButton';

class PortfolioDetail extends React.Component {
	render() {
		const {
			detailTitle,
			detailInfoCh,
			detailInfoEn,
			youtubeVideoID,
			onClick,
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
							width: '100%',
							height: 'auto',
						}}
					/>
				}
				<p className="portfoliodetail-info">{detailInfoCh}</p>
				<p className="portfoliodetail-info">{detailInfoEn}</p>
				<FlatButton
					onClick={onClick}
					labelStyle={{
						color: 'orange',
					}}
					backgroundColor={'#1A1B1B'}
					label="Back"
					fullWidth={true}
				/>
			</div>
		);
	}
}

PortfolioDetail.propTypes = {
	detailTitle: PropTypes.string,
	detailInfoCh: PropTypes.string,
	detailInfoEn: PropTypes.string,
	youtubeVideoID: PropTypes.string,
	onClick: PropTypes.func
};



export default PortfolioDetail;


