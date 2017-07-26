import React from 'react';
import Header from './Header';
import MediaQuery from 'react-responsive';

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
					<iframe width="1280" height="720" src="https://www.youtube.com/embed/SYE4T7YvZ7U?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
				</MediaQuery>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default Layout;