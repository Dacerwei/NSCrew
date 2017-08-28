import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import "aos/dist/aos.css";

class CoopBlock extends React.Component{
	componentDidMount(){
		AOS.init();
	}

	render(){
		const { mediaSrc, title, contentChinese, contentEnglish } = this.props;
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
							<p className="coop-section-content-intro-body-ch"> { contentChinese }</p>
							<p className="coop-section-content-intro-body-en"> { contentEnglish } </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CoopBlock;