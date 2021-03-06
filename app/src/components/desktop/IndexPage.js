import React from 'react';
import Highlights from './Highlights';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVideoReady: false
        };

        this.onReady = this.onReady.bind(this);
    }

    onReady() {
        this.setState({isVideoReady: true});
    }

    render() {
        return (
            <div className='indexpage-container'>
                <div className='mainvideo-container'>
                    <video onCanPlay = {this.onReady} autoPlay loop muted id="mainvideo">
                        <source src="https://storage.googleapis.com/naughty-swing-official-website.appspot.com/indexpage/main_video_mini.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="indexpage-main-wrapper">
                    <h1 className="indexpage-slogon" id="slogan-2">We're<br /><strong className="naughty">Naughty</strong><br />So We <strong className="naughty">Swing</strong></h1> 
                </div>
                <Highlights />
            </div>
        );
    }
}

export default IndexPage;