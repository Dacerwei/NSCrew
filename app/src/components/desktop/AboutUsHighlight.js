import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class AboutUsHighlight extends React.Component {
  render() {
    return(
      <section className="aboutushighlight-container">
        <h2 className="aboutushighlight-title">Introduction | 舞團介紹</h2>
        <div className="aboutushighlight-introduction-content">
          <p className="aboutushighlight-introduction-content-ch">
            Naughty Swing 搖擺舞團，於 2015 年成立，由 6 位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。
            擅長將不同元素融合至 Swing Dance 當中，呈現有別於以往的演出，為目前台灣新生代指標性 Swing 舞團。
            2016 年發起 I Charleston Taipei 影片拍攝計畫，在 2 周內突破 50 萬人次點閱率，並獲得 10 多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。
          </p>
          <p className="aboutushighlight-introduction-content-en">
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
        <div className="aboutushighlight-more-btn-wrapper">
          <Link className="aboutushighlight-more-btn" to="about"><RaisedButton label={'MORE'} style={{}} primary={true}/></Link>
        </div>
      </section>
    );
  }
}

export default AboutUsHighlight;