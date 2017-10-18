import React from 'react';
import AppRoutes from './router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default App = () => (
	<MuiThemeProvider>
		<AppRoutes />
	</MuiThemeProvider>
);