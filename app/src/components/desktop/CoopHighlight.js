import React from 'react';
import VideoProductionIcon from '../../../assets/images/icon_video_production.svg';
import PerformanceIcon from '../../../assets/images/icon_performance.svg';
import LessonIcon from '../../../assets/images/icon_classes.svg';
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
                        <p className="coophighlight-introduction-content-ch">Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                        <p className="coophighlight-introduction-content-en">More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                    </div>
                </div>
                <div className="coophighlight-services-wrapper">
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img id="coophighlight-videoproduction-icon" className="coophighlight-services-serviceitem-icon-src" src={VideoProductionIcon} />
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
                            <img id="coophighlight-performance-icon" className="coophighlight-services-serviceitem-icon-src" src={PerformanceIcon} />
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
                            <img id="coophighlight-lesson-icon" className="coophighlight-services-serviceitem-icon-src" src={LessonIcon} />
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