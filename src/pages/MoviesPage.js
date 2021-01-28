import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGallery, PageShell, Toolbar } from '../components';
import { PageHeading } from '../typography';

const MoviesPage = ({
	closeCreateOnClickHandler,
	closePreviewOnClickHandler,
	createModalIsOpen,
	createMovieOnClickHandler,
	currentFilter,
	dateFilter,
	detailsModalIsOpen,
	favouriteMovieTitles,
	filterDateOnChangeHandler,
	filterSelectOnChangeHandler,
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
			currentFilter={currentFilter}
			dateFilter={dateFilter}
			filterDateOnChangeHandler={filterDateOnChangeHandler}
			filterSelectOnChangeHandler={filterSelectOnChangeHandler}
			moviesList={moviesList}
			openCreateOnClickHandler={openCreateOnClickHandler}
		/>
		<MoviesGallery
			closePreviewOnClickHandler={closePreviewOnClickHandler}
			createModalIsOpen={createModalIsOpen}
			currentFilter={currentFilter}
			dateFilter={dateFilter}
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
	closeCreateOnClickHandler: PropTypes.func.isRequired,
	closePreviewOnClickHandler: PropTypes.func.isRequired,
	createMovieOnClickHandler: PropTypes.func.isRequired,
	currentFilter: PropTypes.string.isRequired,
	dateFilter: PropTypes.shape({
		from: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
	}).isRequired,
	detailsModalIsOpen: PropTypes.bool.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	filterDateOnChangeHandler: PropTypes.func.isRequired,
	filterSelectOnChangeHandler: PropTypes.func.isRequired,
	moviesList: PropTypes.array.isRequired,
	openPreviewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

export { MoviesPage };
