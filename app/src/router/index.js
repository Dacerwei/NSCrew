import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Layout from '../components/Layout';
import IndexPage from '../components/IndexPage';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import Cooperative from '../components/Cooperative';
import Classes from '../components/Classes';
import SwingEvents from '../components/SwingEvents';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

class AppRoutes extends React.Component{
	render() {
		let {history} = this.props;
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0); 
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<IndexPage />
									</div>
									<Footer />
								</div>
							</div>
						)
					}}/>
					<Route path="/about" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0);
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<AboutUs />
									</div>
									<Footer />
								</div>
							</div>
						)
					}}/>
					<Route path="/portfolio" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0);
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<Portfolio />
									</div>
									<Footer />
								</div>
							</div>
						)
					}}/>
					<Route path="/cooperative" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0);
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<Cooperative />
									</div>
									<Footer />
								</div>
							</div>
						)
					}}/>
					<Route path="/classes" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0);
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<Classes />
									</div>
									<Footer />
								</div>
							</div>
						)
					}}/>
					<Route path="/swingevents" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0);
						return(
							<div>
								<div id="container">
									<Header />
									<div className="content">
										<SwingEvents />
									</div>
									<Footer />
								</div>
							</div>
						)
					}}/>
					<Route path="/*" component={()=>{
						// TODO: find a better way
						window.scrollTo(0,0);
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