import React from 'react';
import Brands from './Brands';
import '../../assets/styles/aboutus.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-img-wrapper">
        <img className="aboutus-img" id="aboutus_1" src="https://naughtyswing.blob.core.windows.net/naughtyswing/aboutus_mainphoto_mini.jpg" alt="Naughty Swing Main - 1" />
      </div>
      <div className="aboutus-introduction-wrapper">
        <h1 className="aboutus-introduction-title">Introduction | 舞團介紹</h1>
        <div className="aboutus-introduction-ch">
          <p>Naughty Swing 頑皮搖擺舞團，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。
            擅長將不同元素融合至Swing Dance當中，呈現有別於以往的演出，為目前台灣新生代指標性Swing舞團。
            2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。</p>
        </div>
        <div className="aboutus-introduction-en">
          <p>Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers,
            each with over 10 years of experience in street dance.
            As one of the most iconic dance crews in Taiwan,
            Naughty Swing is keen to integrate elements from
            different dance styles and to give unprecedented performances.
            "I Charleston Taipei" is their first official dance film project launched in 2016,
            reaching over 500,000 views on YouTube within 2 weeks,
            and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.</p>
        </div>
      </div>
      <div className="aboutus-img-wrapper">
        <img className="aboutus-img" id="aboutus_2" src="https://naughtyswing.blob.core.windows.net/naughtyswing/aboutus_experience_mini.jpg" alt="Naughty Swing Main - 2" />
      </div>
      <div className="aboutus-experience-wrapper">
        <h1 className="aboutus-experience-title">Experience | 經歷</h1>
      </div>
      <div className="aboutus-mediaexplosure-wrapper">
        <h1 className="aboutus-mediaexplosure-title">Media Explosure | 媒體報導</h1>
        <div className="aboutus-mediaexplosure-ch">
          <p>自2015年成立起，Naughnty Swing頑皮搖擺舞團透過不同的舞蹈演出與活動合作，陸續獲得不同媒體報導。
            2016年I Charleston Taipei 影片釋出後，更受到許多指標性媒體，含電視、報紙、雜誌，與網路等，的相關報導與露出。</p>
        </div>
        <div className="aboutus-mediaexplosure-en">
          <p>Since founded in 2015, Naughty Swing has be reported
            by different media through performance and collaboration.
            The media exposure has reached to the peak after releasing
            "I Charleston Taipei" film project launched in 2016,
            which  was reported on by  benchmark media,
            including TV, newspaper. magazine, and online media.</p>
        </div>
      </div>
      <div className="aboutus-coopbrands-wrapper">
        <Brands />
      </div>
    </div>
  );
};

export default AboutUs;
