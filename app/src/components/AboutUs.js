import React from "react";

const AboutUs = () => {
	return(
		<div className="ContentPage">
			<div className="profile">
				<p>Naughty Swing，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。擅長將不同元素融合至Swing Dance當中，呈現有別於以往的演出，為目前台灣新生代指標性Swing舞團。2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。</p>
			</div>
			<div className="profile">
				<p>Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers, each with over 10 years of experience in street dance. As one of the most iconic dance crews in Taiwan, Naughty Swing is keen to integrate elements from different dance styles and to give unprecedented performances."I Charleston Taipei" is their first official dance film project launched in 2016, reaching over 500,000 views on YouTube within 2 weeks, and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.</p>
			</div>
			<section id="media-section">
				<h1>I Charleston Taipei</h1>
				<div className="iframe-rwd">
					<iframe width="1280" height="720" src="https://www.youtube.com/embed/MOD0pcKfVWY" frameBorder="0" allowFullScreen></iframe>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;