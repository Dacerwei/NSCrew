import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import '../../assets/styles/IndexPage.css';
import Highlights from './Highlights';

class IndexPage extends React.Component {

	render(){
		return (
			<div className='ContentPage indexpage-container'>
				{/*<BackgroundVideo />*/}
				<video autoPlay loop muted id="mainvideo">
  					<source src="https://naughtyswing.blob.core.windows.net/naughtyswing/00%E9%A6%96%E9%A0%81%E5%BD%B1%E7%89%87.m4v" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<h1 className="indexpage-slogon" id="slogan-2">We're<br />Naughty<br />So We Swing</h1>
				<Highlights />
			</div>
		);
	}
}

export default IndexPage;