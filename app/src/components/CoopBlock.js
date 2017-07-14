import React from 'react';
import MediaQuery from 'react-responsive';


const desktopStyle = {
	padding: '1%',
	float: 'left',
	width: '50%'
};

const mobileStyle = {
	padding: '1%',
	float: 'left',
	width: '100%'
};

class CoopBlock extends React.Component{

	constructor(){
		super();

		this.coopBlockRWD = this.coopBlockRWD.bind(this);
	}

	coopBlockRWD(RWDStyle){
		return(
			<div className="RWD">
				<div className="CoopBlock__left" style={ RWDStyle } data-aos="fade-right">
					<div className="coopblock__media">
						<img className="coopblock__media__content" src={ this.props.mediaSrc } />
					</div>
				</div>
				<div className="CoopBlock__right" style={ RWDStyle } data-aos="fade-left">
					<h1 className="coopblock__title"> { this.props.title } </h1>
					<div className="coopblock__content">
						<input type="checkbox" className="read-more-state" id={ this.props.id } />
						<p className="coopblock__content__body"> { this.props.contentPreview }
							<span className="coopblock__content__readMore"> { this.props.contentReadMore } </span>
						</p>
						<label htmlFor={ this.props.id } className="read-more-trigger"></label>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount(){
		var AOS = require('aos');
		require('aos/dist/aos.css');

		AOS.init({
			disable: window.innerWidth < 1024
		});
	}

	render(){
		return(
			<div className="coopblock">
				<MediaQuery minWidth={612}>
				{
					(matches) => {
						if(matches) {
							return(this.coopBlockRWD(desktopStyle));
						}else {
							return(this.coopBlockRWD(mobileStyle));
						}
					}
				}
				</MediaQuery>
			</div>
		);
	}
}

export default CoopBlock;