import React from 'react';
import {render} from 'react-dom';
import FirstPage from './components/firstPage';

class Index extends React.Component{
	render(){
		return(
			<div>
				<p>this is index page. a webpack test</p>
				<FirstPage />
			</div>
		);
	}
};

render(<Index />, document.getElementById('root'));