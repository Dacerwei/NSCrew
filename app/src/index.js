import React from 'react';
import {render} from 'react-dom';
import AppRoutes from './router';
import '../assets/styles/css/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<AppRoutes />
	</MuiThemeProvider>
);

render(<App />, document.getElementById('root'));