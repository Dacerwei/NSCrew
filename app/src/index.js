import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './router';
import '../assets/styles/css/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
	render() {
		return(
			<MuiThemeProvider>
				<AppRoutes />
			</MuiThemeProvider>
		);
	}
}

render(<App/>, document.getElementById("root"));
