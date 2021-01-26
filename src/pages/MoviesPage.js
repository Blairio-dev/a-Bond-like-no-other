import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGallery, PageShell, Toolbar } from '../components';
import { PageHeading } from '../typography';

const MoviesPage = ({
	closeOnClickHandler,
	favouriteMovieTitles,
	isOpen,
	previewOnClickHandler,
	selectedMovieDetails,
	toggleFavouriteMovieOnClick,
}) => (
	<PageShell>
		<PageHeading text="Movies" />
		<Toolbar />
		<MoviesGallery
			closeOnClickHandler={closeOnClickHandler}
			favouriteMovieTitles={favouriteMovieTitles}
			isOpen={isOpen}
			previewOnClickHandler={previewOnClickHandler}
			selectedMovieDetails={selectedMovieDetails}
			toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
		/>
	</PageShell>
);

MoviesPage.propTypes = {
	closeOnClickHandler: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	previewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

export { MoviesPage };
