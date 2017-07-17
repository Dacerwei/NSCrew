import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Layout from '../components/Layout';
import IndexPage from '../components/IndexPage';
import AboutUs from '../components/AboutUs';
import Showcases from '../components/Showcases';
import Cooperative from '../components/Cooperative';
import SwingEvents from '../components/SwingEvents';
import NotFoundPage from '../components/NotFoundPage';

class AppRoutes extends React.Component{
	render() {
		let {history} = this.props;
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={()=>{
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<IndexPage />
									</div>
								</div>
							</div>
						)
					}}/>
					<Route path="/about" component={()=>{
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<AboutUs />
									</div>
								</div>
							</div>
						)
					}}/>
					<Route path="/showcases" component={()=>{
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<Showcases />
									</div>
								</div>
							</div>
						)
					}}/>
					<Route path="/cooperative" component={()=>{
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<Cooperative />
									</div>
								</div>
							</div>
						)
					}}/>
					<Route path="/swingevents" component={()=>{
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<SwingEvents />
									</div>
								</div>
							</div>
						)
					}}/>
					<Route path="/*" component={()=>{
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<NotFoundPage />
									</div>
								</div>
							</div>
						)
					}}/>
				</Switch>
			</Router>
		);
	}
}

export default AppRoutes;