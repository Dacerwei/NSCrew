import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import IndexPage from '../containers/IndexPage';
import AboutUsPage from '../containers/AboutUsPage';
import PortfolioPage from '../containers/PortfolioPage';
import CooperativePage from '../containers/CooperativePage';
import ClassPage from '../containers/ClassPage';
// import EventsPage from '../containers/EventsPage';
import NotFoundPage from '../containers/NotFoundPage';

class AppRoutes extends React.Component {
	render() {
		return(
			<HashRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={IndexPage}/>
						<Route path="/about" component={AboutUsPage}/>
						<Route path="/portfolio" component={PortfolioPage}/>
						<Route path="/cooperative" component={CooperativePage}/>
						<Route path="/classes" component={ClassPage}/>
						{/* <Route path="/swingevents" component={EventsPage}/> */}
						<Route path="/*" component={NotFoundPage}/>
					</Switch>
				</Layout>
			</HashRouter>
		);
	}
}

export default AppRoutes;