import React from 'react';
import BackgroundVideoRWD from './BackgroundVideoRWD';
import AboutUs from './AboutUs';
import '../../assets/styles/IndexPage.css';

class IndexPage extends React.Component {

	render(){
		return (
			<div className='ContentPage'>
				<BackgroundVideoRWD />
				<h1 id="slogan-2">We're<br />Naughty<br />So We Swing</h1>
				<AboutUs />
			</div>
		);
	}
}

export default IndexPage;