import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';

const Main = () => {
	return (
		<div>
			<BrowserRouter basename={window.location.pathname || ''}>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/resume' component={Resume} />
					<Route path='/projects' component={Projects} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Main;
