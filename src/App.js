import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Movies, Favourites } from './pages';
import { Sidebar } from './components';

const App = () => (
	<Router>
		<Sidebar />
		<Switch>
			<Route path="/" exact component={() => <Home />} />
			<Route path="/movies" exact component={() => <Movies />} />
			<Route path="/favourites" exact component={() => <Favourites />} />
		</Switch>
	</Router>
);

export { App };
