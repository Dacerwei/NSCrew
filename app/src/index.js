import React from 'react';
import {render} from 'react-dom';
import FirstPage from './components/firstPage';
// import wtp from 'images/showcase_wtp.jpg';

class Index extends React.Component{
	render(){
		return(
			<div>
				<h1> hot reload test</h1>
				<FirstPage />
			</div>
		);
	}
};

render(<Index />, document.getElementById('root')); 