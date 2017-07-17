import React from 'react';
import Youtube from 'react-youtube';
import '../../assets/styles/backgroundvideo.css';

const videoId = 'SYE4T7YvZ7U';
const opt = {
	width: 'atuo',
	height: 'atuo',
	allowFullScreen: 0,
	playerVars: {
		list:'PLwOAbLN_Fhuc2QadYdfWXdAwAWcUGqa4d',
		listType: 'playlist',
		autoplay: true,
		loop: 1,
		fs:0,
		controls: 0,
		disablekb: true,
		rel:0,
		enablejsapi: true,
		showinfo: 0
	}
};


class BackgroundVideoRWD extends React.Component {

	componentDidMount() {
		console.log("componentDidMount");
	}
	render() {
		return(
			<div className="backgroundvideo-container">
				<Youtube
					videoId={ videoId }          
					id={'mainvideo'}
					opts={opt}
					onReady={(e)=>{
						e.target.mute();
						e.target.setLoop(true);
					}}
				/>
			</div>
		);
	}
}

export default BackgroundVideoRWD;