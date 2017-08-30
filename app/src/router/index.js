import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import IndexPage from '../components/IndexPage';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import Cooperative from '../components/Cooperative';
import Classes from '../components/Classes';
import SwingEvents from '../components/SwingEvents';
import NotFoundPage from '../components/NotFoundPage';

class AppRoutes extends React.Component {
	render() {
		let {history} = this.props;
		return(
			<Router history={history}>
				<Layout>
					<Switch>
						<Route exact path="/" component={IndexPage}/>
						<Route path="/about" component={AboutUs}/>
						<Route path="/portfolio" component={Portfolio}/>
						<Route path="/cooperative" component={Cooperative}/>
						<Route path="/classes" component={Classes}/>
						<Route path="/swingevents" component={SwingEvents}/>
						<Route path="/*" component={NotFoundPage}/>
					</Switch>
				</Layout>
			</Router>
		);
	}
}

export default AppRoutes;