import React from 'react';


class Video extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoWidth: 0,
			videoHeigh: 0
		};
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		this.setState({ 
			videoWidth: this.refs.videoArea.innerWidth,
			videoHeigh: this.refs.videoArea.innerWidth*0.56
		});
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize() {
		this.setState({ 
			videoWidth: this.refs.videoArea.innerWidth,
			videoHeigh: this.refs.videoArea.innerWidth*0.56
			
		 });
    }

	render() {
		return(
			<div className="video-container" ref="videoArea">
				<h2 className="video-title">{this.props.title}</h2>
				<iframe width={this.state.videoWidth} height={this.state.videoHeigh} src={this.props.src} frameBorder="0" allowFullScreen></iframe>
			</div>
		);
	}
}

export default Video;