import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Movies, Favourites } from './pages';
import { Sidebar } from './components';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favouriteMovieTitles: [],
		};

		this.addFavouriteMovie = this.addFavouriteMovie.bind(this);
	}

	addFavouriteMovie = (movie) => () => {
		const currentFaves = [...this.state.favouriteMovieTitles];
		!currentFaves.includes(movie) && currentFaves.push(movie);
		this.setState({ favouriteMovieTitles: currentFaves });
		console.log(this.state.favouriteMovieTitles);
	};

	render() {
		const { favouriteMovieTitles } = this.state;

		return (
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route
						path="/movies"
						exact
						component={() => (
							<Movies addFavouriteMovieOnClick={this.addFavouriteMovie} favouriteMovieTitles={favouriteMovieTitles} />
						)}
					/>
					<Route
						path="/favourites"
						exact
						component={() => (
							<Favourites addFavouriteMovieOnClick={this.addFavouriteMovie} favouriteMovieTitles={favouriteMovieTitles} />
						)}
					/>
				</Switch>
			</Router>
		);
	}
}

export { App };
