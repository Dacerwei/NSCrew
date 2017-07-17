import React from 'react';
import '../../assets/styles/basic.css';

class Footer extends React.Component{
	render(){
		return(
			<footer className="footer-container">
				<p className="footer-container-info">Made by: Chinwei Hsu</p>
  				<p className="footer-container-info"> Contact information:<a href="mailto:someone@example.com">naughtyswingtw@gmail.com</a>.</p>
			</footer>
		);
	}
};
export default Footer;