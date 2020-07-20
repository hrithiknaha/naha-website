import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Navbar from './Navbar';

const Main = () => {
	return (
		<div>
			<BrowserRouter basename={window.location.pathname || ''}>
				<div>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/resume' exact component={Resume} />
						<Route path='/projects' exact component={Projects} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Main;
