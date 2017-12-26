import React from 'react';

class Classes extends React.Component {
    render() {
        return(
            <div className="classes-container">
                <div className="classes-information">
                    <p className="classes-information-content">課程資訊即將釋出</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScky-C4jHWIsfx-5cxKZ93IUKyyO4LJPhQfBTMBT0JJUBb0YA/viewform" target="blank"><div className="classes-signup-button">Sign up</div></a>
                </div>
                <div className="classes-promote">
                    <h2 className="classes-promote-title">近期教學活動</h2>
                    <div className="classes-promote-content">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=250&height=387&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=757696621076512" 
                        width="250"
                        height="387"
                        style={{
                            border: 'none',
                            overflow: "hidden"
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

export default Classes