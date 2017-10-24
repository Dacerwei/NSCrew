import React from 'react';
import Brands from './Brands';
import Experience from './Experience';
import { Parallax } from 'react-parallax';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus-container">
      <Parallax
        strength={300}
        bgImage="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/aboutus%2Faboutus_01_2480_drakcorner_mini.jpg?alt=media&token=9be74eeb-d1da-4459-b36d-2df1a7129d74"
      >
        <section className="aboutus-introduction-wrapper">
          <h2 className="aboutus-introduction-title">Introduction | 舞團介紹</h2>
          <div className="aboutus-introduction-content">
            <p className="aboutus-introduction-content-ch">
              Naughty Swing 搖擺舞團，於2015年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。
              擅長將不同元素融合至 Swing Dance 當中，呈現有別於以往的演出，為目前台灣新生代指標性 Swing 舞團。
              2016年發起 I Charleston Taipei 影片拍攝計畫，在2周內突破50萬人次點閱率，並獲得10多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。
              </p>
            <p className="aboutus-introduction-content-en">
              Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers,
              each with over 10 years of experience in street dance.
              As one of the most iconic dance crews in Taiwan,
              Naughty Swing is keen to integrate elements from
              different dance styles and to give unprecedented performances.
              "I Charleston Taipei" is their first official dance film project launched in 2016,
              reaching over 500,000 views on YouTube within 2 weeks,
              and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.
            </p>
          </div>
        </section>
      </Parallax>
      <Parallax
        strength={300}
      >
        <section className="aboutus-experience-wrapper">
          <h2 className="aboutus-experience-title">Experience | 經歷</h2>
          <Experience />
        </section>
      </Parallax>
      <Parallax
        strength={300}
        bgImage="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/aboutus%2Faboutus_03_2480_mini.jpg?alt=media&token=da7bfd31-2cac-4229-a24d-96d6b7e7a19f"
      >
        <section className="aboutus-mediaexplosure-wrapper">
          <h2 className="aboutus-mediaexplosure-title">Media Explosure | 媒體報導</h2>
          <div className="aboutus-mediaexplosure-content">
            <p className="aboutus-mediaexplosure-content-ch">
              自 2015 年成立起，Naughnty Swing 搖擺舞團透過不同的舞蹈演出與活動合作，陸續獲得不同媒體報導。
              2016 年 I Charleston Taipei 影片釋出後，更受到許多指標性媒體，含電視、報紙、雜誌，與網路等，的相關報導與露出。
            </p>
            <p className="aboutus-mediaexplosure-content-en">
              Since founded in 2015, Naughty Swing has be reported
              by different media through performance and collaboration.
              The media exposure has reached to the peak after releasing
              "I Charleston Taipei" film project launched in 2016,
              which  was reported on by  benchmark media,
              including TV, newspaper. magazine, and online media.
            </p>
          </div>
        </section>
      </Parallax>
        <Parallax
          strength={300}
        >
          <section className="aboutus-coopbrands-wrapper">
            <Brands />
          </section>
        </Parallax>
      </div>
    );
  }
}

export default AboutUs;
