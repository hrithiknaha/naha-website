import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';

const Main = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/resume' exact component={Resume} />
			</Switch>
		</BrowserRouter>
	);
};

export default Main;
