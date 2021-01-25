import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, MoviesPage, FavouritesPage } from './pages';
import { Sidebar } from './components';
import { updateFavouriteMovies, updateSelectedMovie } from './data/SessionStorageWriter';
import { checkFavouriteMovies, checkSelectedMovie } from './data/SessionStorageReader';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favouriteMovieTitles: checkFavouriteMovies(),
			isOpen: Object.keys(checkSelectedMovie()).length !== 0,
			selectedMovieDetails: checkSelectedMovie(),
		};
	}

	closeOnClickHandler = () => {
		this.setState(() => ({ isOpen: false, selectedMovieDetails: {} }));
		updateSelectedMovie({});
	};

	previewOnClickHandler = (movie) => {
		this.setState(() => ({ isOpen: true, selectedMovieDetails: movie }));
		updateSelectedMovie(movie);
	};

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
		const { favouriteMovieTitles, isOpen, selectedMovieDetails } = this.state;

		return (
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/" exact component={() => <HomePage />} />
					<Route
						path="/movies"
						exact
						component={() => (
							<MoviesPage
								closeOnClickHandler={this.closeOnClickHandler}
								favouriteMovieTitles={favouriteMovieTitles}
								isOpen={isOpen}
								previewOnClickHandler={this.previewOnClickHandler}
								selectedMovieDetails={selectedMovieDetails}
								toggleFavouriteMovieOnClick={this.toggleFavouriteMovie}
							/>
						)}
					/>
					<Route
						path="/favourites"
						exact
						component={() => (
							<FavouritesPage
								closeOnClickHandler={this.closeOnClickHandler}
								favouriteMovieTitles={favouriteMovieTitles}
								isOpen={isOpen}
								previewOnClickHandler={this.previewOnClickHandler}
								selectedMovieDetails={selectedMovieDetails}
								toggleFavouriteMovieOnClick={this.toggleFavouriteMovie}
							/>
						)}
					/>
				</Switch>
			</Router>
		);
	}
}

export { App };
