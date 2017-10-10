import React from 'react'
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import FlatButton from 'material-ui/FlatButton';

class PortfolioDetail extends React.Component {
	render() {
		const { 
			detailInfo,
			youtubeVideoID,
			onClick,
		} = this.props;

		return(
			<div className="portfoliodetail-container">
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
				<p className="portfoliodetail-info">{detailInfo}</p>
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
	detailInfo: PropTypes.string,
	youtubeVideoID: PropTypes.string
};



export default PortfolioDetail;


