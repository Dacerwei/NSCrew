import React from 'react';
import {render} from 'react-dom';
import FirstPage from './components/firstPage';

class Index extends React.Component{
	render(){
		return(
			<div>
				this is index page.
				a webpack test
				<FirstPage />
			</div>
			);
	}
};

render(<Index />, document.getElementById('root'));