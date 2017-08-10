import React from 'react';
import VideoProductionIcon from '../../assets/images/highlight_coop_video_production.svg';
import PerformanceIcon from '../../assets/images/highlight_coop_performance_1.svg';
import LessonIcon from '../../assets/images/highlight_coop_lessons.svg';
const CoopSet = [
{
    id:"coop-performance",
    title: "Performance | 表演",
    contentPreview: "好得舞蹈表演永遠不嫌少！透過搖擺舞、爵士樂，與Naughty Swing專業的演出能力，為你的記者會、舞會等活動增添美麗與歡樂的色彩！",
    contentReadMore: " There's never too much of a good performance, especially when it comes to social dance! Want to add some elements which entertain your audience, invigorate your event and give you all a total enjoyment with profession and passion? We ARE just the one you're looking for!",
    mediaTitle: "performance",
    mediaSrc: 'https://naughtyswing.blob.core.windows.net/naughtyswing/coop_performance_mini.jpg'
},
{
    id: "coop-videoshooting",
    title:"Video Production | 影片",
    contentPreview: "影片所能傳遞的訊息勝過千言萬語，更遑論透過搖擺舞的影片拍攝，將肢體語言的豐富情感傳達至舞蹈影片中，帶領觀眾一同進步故事裡！",
    contentReadMore:"'A picture says a thousand words.' - while a video shows a thousand images, and nothing's more contagious than a Swing Dance film! No words needed! we tell stories through jazz music and dance moves, as the chemistry among the dancers says it all. Happen to have something to be promoted through a good story? Tell us now!",
    mediaTitle: "i charleston taipei",
    mediaSrc: 'https://naughtyswing.blob.core.windows.net/naughtyswing/coop_shooting_mini.jpg'
},
{
    id: "coop-teaching",
    title:"Swing Dance Lessons | 搖擺舞專業教學",
    contentPreview: "想要學習雙人社交舞蹈卻又不知該從何下手？快來參加我們的常態搖擺舞課程或是體驗課程，讓擁有專業舞蹈教學經歷的Naughty Swing，帶你進入搖擺舞的新世界！",
    contentReadMore: "Excited but nervous, not sure when and how to step out of your comfort zone and onto the dance floor? Now is the time, and we're here to help you make that happen! Excited but nervous, not sure when and how to step out of your comfort zone and onto the dance floor? Now is the time, and we're here to help you make that happen! With our 10-year experience in dancing and diversified exposure to different dance styles, we understand the problems you may encounter and more important, the methods to overcome explained to you in an interesting and easily understood way!",
    mediaTitle: "當代藝術美術館體驗課程",
    mediaSrc: "https://naughtyswing.blob.core.windows.net/naughtyswing/02%E6%90%96%E6%93%BA%E8%88%9E%E9%AB%94%E9%A9%97%E6%95%99%E5%AD%B8.jpg"
}
];

class CoopHighlight extends React.Component {
    render() {
        return(
            <section className="coophighlight-container">
                <div className="coophighlight-introduction-wrapper">
                    <div className="coophighlight-introduction-content">
                        <p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                        <p>Naughty Swing頑皮搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被Swing Dance搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                    </div>
                </div>
                <div className="coophighlight-services-wrapper">
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img className="coophighlight-services-serviceitem-icon-src" src={VideoProductionIcon} />
                        </div>
                        <div className="coophighlight-services-serviceitem-title">
                            <h1>Video Produciton</h1>
                        </div>
                        <div className="coophighlight-services-serviceitem-content">
                            <p>{CoopSet[1].contentReadMore}</p>
                            <p>{CoopSet[1].contentPreview}</p>
                        </div>
                    </div>
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img className="coophighlight-services-serviceitem-icon-src" src={PerformanceIcon} />
                        </div>
                        <div className="coophighlight-services-serviceitem-title">
                            <h1>Performance</h1>
                        </div>
                        <div className="coophighlight-services-serviceitem-content">
                            <p>{CoopSet[0].contentReadMore}</p>
                            <p>{CoopSet[0].contentPreview}</p>
                        </div>
                    </div>
                    <div className="coophighlight-services-serviceitem">
                        <div className="coophighlight-services-serviceitem-icon-container">
                            <img className="coophighlight-services-serviceitem-icon-src" src={LessonIcon} />
                        </div>
                        <div className="coophighlight-services-serviceitem-title">
                            <h1>Swing Dance Lessons</h1>
                        </div>
                        <div className="coophighlight-services-serviceitem-content">
                            <p>{CoopSet[2].contentReadMore}</p>
                            <p>{CoopSet[2].contentPreview}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CoopHighlight;