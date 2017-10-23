import React from 'react';

class ClassesHighlight extends React.Component {
    render() {
        return(
            <div className="classes-container">
                {/* <div className="classes-information">
                    <p className="classes-information-content">
                        課程頁面施工中預計 2017 年 10 月 23 日上線
                    </p>
                </div> */}
                <div className="classes-promote">
                    <h2 className="classes-promote-title">近期教學活動</h2>
                    <div className="classes-promote-content">
                        <iframe
                            className="swingevents-highlight-event"
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=500&height=441&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=757696621076512"
                            width="500"
                            height="441"
                            style={{
                                border: 'none',
                                overflow: 'hidden'
                            }}
                            scrolling="no"
                            frameBorder="0"
                            allowTransparency="true">
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassesHighlight