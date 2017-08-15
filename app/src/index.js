import React from 'react';
import {render} from 'react-dom';
import AppRoutes from './router';
import PropTypes from 'prop-types';
import '../assets/styles/css/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

const App = () => (
	<MuiThemeProvider>
		<AppRoutes history={ history }/>
	</MuiThemeProvider>
);

window.onload = () => {
	render(<App />, document.getElementById('root')); 
}