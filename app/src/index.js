import React from 'react';
import {render} from 'react-dom';
import AppRoutes from './router';
import PropTypes from 'prop-types';
import '../assets/styles/css/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
	<MuiThemeProvider>
		<AppRoutes />
	</MuiThemeProvider>
);

window.onload = () => {
	render(<App />, document.getElementById('root')); 
}