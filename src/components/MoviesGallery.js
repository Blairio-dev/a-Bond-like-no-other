import React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import { extendMoment } from 'moment-range';
import PropTypes from 'prop-types';
import { DetailsModal, PreviewPanel } from '.';
import { ErrorMessage } from '../typography';

const extendedMoment = extendMoment(moment);

const isInRange = (movieDate, dateFilter) => {
	const range = extendedMoment().range(moment(dateFilter.from, 'YYYY-MM-DD'), moment(dateFilter.to, 'YYYY-MM-DD'));
	return range.contains(moment(movieDate, 'D MMMM YYYY'));
};

const StyledGrid = styled('div')`
	display: flex;
	flex-wrap: wrap;
`;

const MoviesGallery = ({
	closePreviewOnClickHandler,
	favouriteMovieTitles,
	createModalIsOpen,
	dateFilter,
	detailsModalIsOpen,
	moviesList,
	openPreviewOnClickHandler,
	selectedMovieDetails,
	showOnlyFavourites,
	toggleFavouriteMovieOnClick,
}) => {
	const filteredMoviesList = () => {
		if (showOnlyFavourites) {
			return showOnlyFavourites
				? moviesList.filter((movie) => favouriteMovieTitles.includes(movie.Film))
				: [...moviesList];
		} else {
			return dateFilter.from !== '' && dateFilter.to !== ''
				? moviesList.filter((movie) => isInRange(movie['UK release date'], dateFilter))
				: [...moviesList];
		}
	};
	const modalIsOpen = createModalIsOpen || detailsModalIsOpen;
	const emptyMoviesList = filteredMoviesList().length === 0;
	console.log(emptyMoviesList);

	return (
		<StyledGrid>
			{modalIsOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')}
			{filteredMoviesList().map((movie) => (
				<div key={movie.Film + movie['UK release date']}>
					<PreviewPanel
						actorName={movie['Bond Actor']}
						imageUrl={movie.ImageURL}
						movieName={movie.Film}
						onClick={() => openPreviewOnClickHandler(movie)}
						ukReleaseDate={movie['UK release date']}
					/>
				</div>
			))}
			{detailsModalIsOpen && (
				<DetailsModal
					closeOnClick={() => closePreviewOnClickHandler()}
					favouriteMovieTitles={favouriteMovieTitles}
					isOpen={detailsModalIsOpen}
					selectedMovieDetails={selectedMovieDetails}
					toggleFavouriteMovieOnClick={toggleFavouriteMovieOnClick}
				/>
			)}
			{emptyMoviesList && <ErrorMessage text="No movies to show." />}
		</StyledGrid>
	);
};

MoviesGallery.propTypes = {
	closePreviewOnClickHandler: PropTypes.func.isRequired,
	createModalIsOpen: PropTypes.bool,
	dateFilter: PropTypes.shape({
		from: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
	}),
	detailsModalIsOpen: PropTypes.bool.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	moviesList: PropTypes.array.isRequired,
	openPreviewOnClickHandler: PropTypes.func.isRequired,
	selectedMovieDetails: PropTypes.object.isRequired,
	showOnlyFavourites: PropTypes.bool.isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

MoviesGallery.defaultProps = {
	createModalIsOpen: false,
	detailsModalIsOpen: false,
	showOnlyFavourites: false,
};

export { MoviesGallery };
