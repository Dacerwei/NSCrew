import React from 'react';
import PropTypes from 'prop-types';

class PorfolioItem extends React.Component{
	render() {
		const { key, onClick, opt, height, row } = this.props;
		return(
			<div className="PorfolioItem" key={key} onClick = { onClick.bind(this, row, opt) } >
				<figure className="PorfolioItem-figure">
					<img className="PorfolioItem-img"
						src={ opt.src } 
						height={ height } 
						width={ height * opt.aspectRatio } 
					/>
					<figcaption className="PorfolioItem-figcaption">
						<h3 className="PorfolioItem-title">{ opt.title }</h3>
					</figcaption>
				</figure>
			</div>
		);
	}
}

PorfolioItem.PropTypes = {
	key: PropTypes.Number,
	onClick: PropTypes.func,
	opt: PropTypes.object,
	height: PropTypes.number,
	row: PropTypes.number
};

export default PorfolioItem;
