import React from 'react';
import CoopSet from '../../helpers/CoopSet';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class CoopHighlight extends React.Component {
    render() {
        return(
            <section className="coophighlight-container">
                <div className="coophighlight-introduction-wrapper">
                    <h2 className="coophighlight-introduction-title">CO-OP | 合作項目</h2>
                    <div className="coophighlight-introduction-content">
                        <p className="coophighlight-introduction-content-ch">Naughty Swing頑皮搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被Swing Dance搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                        <p className="coophighlight-introduction-content-en">More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                    </div>
                </div>
                <div className="coophighlight-services-wrapper">
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img id="coophighlight-videoproduction-icon" className="coophighlight-services-serviceitem-icon-src" src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/indexpage%2Ficon_video_production.svg?alt=media&token=045a04ab-5946-4499-8172-d0e7e5e8c36f" />
                        </div>
                        <div className="coophighlight-services-serviceitem-title">
                            <h1>Video Production</h1>
                        </div>
                        <div className="coophighlight-services-serviceitem-content">
                            <p>{CoopSet[1].contentChinese}</p>
                        </div>
                    </div>
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img id="coophighlight-performance-icon" className="coophighlight-services-serviceitem-icon-src" src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/indexpage%2Ficon_performance.svg?alt=media&token=d4341de2-6faa-4d1d-815d-6ca392adbf4a" />
                        </div>
                        <div className="coophighlight-services-serviceitem-title">
                            <h1>Performance</h1>
                        </div>
                        <div className="coophighlight-services-serviceitem-content">
                            <p>{CoopSet[0].contentChinese}</p>
                        </div>
                    </div>
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img id="coophighlight-lesson-icon" className="coophighlight-services-serviceitem-icon-src" src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/indexpage%2Ficon_classes.svg?alt=media&token=739208a7-ab6e-44b0-a3c7-84d2c778e3e3" />
                        </div>
                        <div className="coophighlight-services-serviceitem-title">
                            <h1>Swing Dance Lessons</h1>
                        </div>
                        <div className="coophighlight-services-serviceitem-content">
                            <p>{CoopSet[2].contentChinese}</p>
                        </div>
                    </div>
                </div>
                <div className="coophighlight-more-btn-wrapper">
                    <Link className="coophighlight-more-btn" to="cooperative"><RaisedButton label={'MORE'} primary={true}/></Link>
                </div>
            </section>
        );
    }
}

export default CoopHighlight;