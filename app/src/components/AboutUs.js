import React from "react";
import AboutUs_1 from "../../assets/images/aboutus_1.png";
import AboutUs_2 from "../../assets/images/aboutus_2.jpg";
import "../../assets/styles/aboutus.css";

const AboutUs = () => {
	return(
		<div className="aboutus-container">
			<div className="aboutus-img-wrapper">
				<img className="aboutus-img" id="aboutus_1" src={ AboutUs_1 } alt="Naughty Swing Main photo - 1"/>
			</div>
			<div className="aboutus-introduction-wrapper">
				<div className="aboutus-introduction-ch">
					<p>Naughty Swing，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。擅長將不同元素融合至Swing Dance當中，呈現有別於以往的演出，為目前台灣新生代指標性Swing舞團。2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。</p>
				</div>
				<div className="aboutus-introduction-en">
					<p>Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers, each with over 10 years of experience in street dance. As one of the most iconic dance crews in Taiwan, Naughty Swing is keen to integrate elements from different dance styles and to give unprecedented performances."I Charleston Taipei" is their first official dance film project launched in 2016, reaching over 500,000 views on YouTube within 2 weeks, and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.</p>
				</div>
			</div>
			<div className="aboutus-img-wrapper">
				<img className="aboutus-img" id="aboutus_2" src={ AboutUs_2 } alt="Naughty Swing Main photo - 2"/>
			</div>
		</div>
	);
};

export default AboutUs;