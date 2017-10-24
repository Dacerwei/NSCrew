import React from 'react';
import PropTypes from 'prop-types';

class PortfolioItem extends React.Component{
	render() {
		const { onClick, opt, height } = this.props;
		return(
			<div className="portfolioitem-container"  onClick = { onClick.bind(this, opt) } >
				<figure className="portfolioitem-figure">
					<img className="portfolioitem-img"
						src={ opt.src }
						height={ height }
						width={ height * opt.aspectRatio }
					/>
					<figcaption className="portfolioitem-figcaption">
						<h3 className="portfolioitem-title">{ opt.title }</h3>
					</figcaption>
				</figure>
			</div>
		);
	}
}

PortfolioItem.propTypes = {
	onClick: PropTypes.func,
	opt: PropTypes.object,
	height: PropTypes.number
};

export default PortfolioItem;
