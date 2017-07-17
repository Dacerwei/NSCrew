import React from 'react';
import {render} from 'react-dom';
import AppRoutes from './router';
import PropTypes from 'prop-types';
import '../assets/styles/style.css';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

window.onload = () => {
	render(<AppRoutes history={ history }/>, document.getElementById('root')); 
}