import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import '../../assets/styles/IndexPage.css';
import Highlights from './Highlights';
class IndexPage extends React.Component {

	render(){
		return (
			<div className='ContentPage indexpage-container'>
				<BackgroundVideo />
				<h1 className="indexpage-slogon" id="slogan-2">We're<br />Naughty<br />So We Swing</h1>
				<Highlights />
			</div>
		);
	}
}

export default IndexPage;