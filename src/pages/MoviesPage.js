import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGallery, PageShell, Toolbar } from '../components';
import { PageHeading } from '../typography';

const MoviesPage = ({
	closeCreateOnClickHandler,
	closePreviewOnClickHandler,
	createModalIsOpen,
	createMovieOnClickHandler,
	detailsModalIsOpen,
	favouriteMovieTitles,
	moviesList,
	openCreateOnClickHandler,
	openPreviewOnClickHandler,
	selectedMovieDetails,
	toggleFavouriteMovieOnClick,
}) => (
	<PageShell>
		<PageHeading text="Movies" />
		<Toolbar
			closeCreateOnClickHandler={closeCreateOnClickHandler}
			createModalIsOpen={createModalIsOpen}
			createMovieOnClickHandler={createMovieOnClickHandler}
			moviesList={moviesList}
			openCreateOnClickHandler={openCreateOnClickHandler}
		/>
		<MoviesGallery
			closePreviewOnClickHandler={closePreviewOnClickHandler}
			createModalIsOpen={createModalIsOpen}
			detailsModalIsOpen={detailsModalIsOpen}
			favouriteMovieTitles={favouriteMovieTitles}
			moviesList={moviesList}
			openPreviewOnClickHandler={openPreviewOnClickHandler}
			selectedMovieDetails={selectedMovieDetails}
			toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
		/>
	</PageShell>
);

MoviesPage.propTypes = {
	closePreviewOnClickHandler: PropTypes.func.isRequired,
	createMovieOnClickHandler: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	detailsModalIsOpen: PropTypes.bool.isRequired,
	moviesList: PropTypes.array.isRequired,
	openPreviewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

export { MoviesPage };
