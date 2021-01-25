import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Movies, Favourites } from './pages';
import { Sidebar } from './components';
import { updateFavouriteMovies } from './data/SessionStorageWriter';
import { checkFavouriteMovies } from './data/SessionStorageReader';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favouriteMovieTitles: checkFavouriteMovies(),
		};
	}

	toggleFavouriteMovie = (movie) => () => {
		const isFavourite = this.state.favouriteMovieTitles.includes(movie);
		const currentFaves = [...this.state.favouriteMovieTitles];

		let newFaves;
		if (isFavourite) {
			newFaves = currentFaves.filter((favouriteMovie) => favouriteMovie !== movie);
		} else {
			currentFaves.push(movie);
			newFaves = [...currentFaves];
		}
		this.setState({ favouriteMovieTitles: newFaves });
		updateFavouriteMovies(newFaves);
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
							<Movies toggleFavouriteMovieOnClick={this.toggleFavouriteMovie} favouriteMovieTitles={favouriteMovieTitles} />
						)}
					/>
					<Route
						path="/favourites"
						exact
						component={() => (
							<Favourites
								toggleFavouriteMovieOnClick={this.toggleFavouriteMovie}
								favouriteMovieTitles={favouriteMovieTitles}
							/>
						)}
					/>
				</Switch>
			</Router>
		);
	}
}

export { App };
