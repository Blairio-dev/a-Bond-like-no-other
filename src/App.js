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
	}

	addFavouriteMovie = (movie) => () => {
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
