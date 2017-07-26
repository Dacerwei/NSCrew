import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/portfolio.css';

class PorfolioItem extends React.Component{
	render() {
		const { onClick, opt, height, row } = this.props;
		return(
			<div className="porfolioitem-container"  onClick = { onClick.bind(this, row, opt) } >
				<figure className="porfolioitem-figure">
					<img className="porfolioitem-img"
						src={ opt.src } 
						height={ height } 
						width={ height * opt.aspectRatio } 
					/>
					<figcaption className="porfolioitem-figcaption">
						<h3 className="porfolioitem-title">{ opt.title }</h3>
					</figcaption>
				</figure>
			</div>
		);
	}
}

PorfolioItem.propTypes = {
	onClick: PropTypes.func,
	opt: PropTypes.object,
	height: PropTypes.number,
	row: PropTypes.number
};

export default PorfolioItem;
