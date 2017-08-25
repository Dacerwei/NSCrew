import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import "aos/dist/aos.css";

class CoopBlock extends React.Component{
	constructor(){
		super();

		this.state ={
			expanded: false,
			buttonState: 'Show More'
		}

		this.handleClick = this.handleClick.bind(this);

	}

	componentDidMount(){
		AOS.init();
	}

	handleClick(){
		const { expanded } = this.state;
		if(expanded){
			this.setState({
				expanded: false,
				buttonState: "Show More"
			});
		} else {
			this.setState({
				expanded: true,
				buttonState: "Show Less"
			});
		}
	}

	render(){
		const { mediaSrc, title, contentPreview, contentReadMore } = this.props;
		const { expanded, buttonState } = this.state;
		return(
			<div className="coop-section-container">
				<div className="coop-section-left"  data-aos="fade-right" data-aos-once >
					<div className="coop-section-media-wrapper">
						<img className="coopblock-section-media-img" src={ mediaSrc } alt={ title } />
					</div>
				</div>
				<div className="coop-section-right" data-aos="fade-left" data-aos-once >
					<div className="coop-section-content-wrapper">
						<h2 className="coop-section-content-title">{ title }</h2>
						<div className="coop-section-content-intro">
							<p className="coop-section-content-intro-body"> { contentPreview }
							{ expanded ? <span className="coop-section-content-intro-readmore-target"> { contentReadMore } </span> : undefined}
							</p>
							<button className="coop-section-content-intro-readmore-btn" onClick={ this.handleClick}>{ buttonState }</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CoopBlock;