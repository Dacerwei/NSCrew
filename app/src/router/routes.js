import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import IndexPage from '../components/IndexPage';
import AboutUs from '../components/AboutUs';
import Showcases from '../components/Showcases';
import Cooperative from '../components/Cooperative';
import SwingEvents from '../components/SwingEvents';
import NotFoundPage from '../components/NotFoundPage';

const routes = () => {
	return(
		<div className="theRoutes"> 
			<Route path="/" component={IndexPage} />
			<Route path="/" component={Layout} />
			<Route path="/about" component={AboutUs} />
			<Route path="/showcases" component={Showcases} />
			<Route path="/cooperative" component={Cooperative} />
			<Route path="/swingevents" component={SwingEvents} />
			<Route path="/*" component={NotFoundPage} />
		</div>
	);
}

export default routes;

