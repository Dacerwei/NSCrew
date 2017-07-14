import React from 'react';
import Header from './Header';
import MediaQuery from 'react-responsive';
import BackgroundVideoRWD from './BackgroundVideoRWD';

class Layout extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			videoStatus: 'loading'
		};

		this.handleVideoLoaded = this.handleVideoLoaded.bind(this);
		this.handleVideoErrored = this.handleVideoErrored.bind(this);

	}

	handleVideoLoaded(){
		console.log('video loaded');
    	this.setState({ videoStatus: 'loaded' });
    }

    handleVideoErrored(){
    	console.log('failed to load video');
    	this.setState({ videoStatus: 'failed to load' });
    }

	render() {
		return(
			<div id="container">
				<Header />
				<MediaQuery minDeviceWidth={1224}>
					<BackgroundVideoRWD 
						src= {'/video/mainpagevideo.mp4'}
						width={1920} 
						height={1080} 
						onLoadHandler={this.handleVideoLoaded}
						onErrorHandler={this.handleVideoErrored}
					/>
				</MediaQuery>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Layout;