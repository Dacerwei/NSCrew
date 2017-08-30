import React from 'react';
import Highlights from './Highlights';
import MediaQuery from 'react-responsive';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVideoReady: false
        };

        this.onReady = this.onReady.bind(this);
    }

    onReady() {
        // console.log('video ready');
        this.setState({isVideoReady: true});
    }

    render(){
        const {isVideoReady} = this.state;
        return (
            <div className='indexpage-container'>
                {/*<MediaQuery query='(min-width: 769px)'>*/}
                    <div className='mainvideo-container'>
                        <video onCanPlay = {this.onReady} autoPlay loop muted id="mainvideo">
                            <source src="https://storage.googleapis.com/naughty-swing-official-website.appspot.com/indexpage/main_video_mini.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="indexpage-main-wrapper">
                        <h1 className="indexpage-slogon" id="slogan-2">We're<br />Naughty<br />So We Swing</h1> 
                    </div>
                {/*</MediaQuery>*/}
                <Highlights />
            </div>
        );
    }
}

export default IndexPage;