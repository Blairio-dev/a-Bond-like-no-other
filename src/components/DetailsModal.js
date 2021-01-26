import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Title } from '../typography';
import { colours, marginExternal } from '../assets/tokens';
import { ReactComponent as Star } from '../assets/svgs/star.svg';
import { BaseModal, DescriptionList } from '../components';

const StyledPoster = styled('img')`
	border-radius: 4px;
	${marginExternal}
	transition: transform 0.1s ease-out;
	width: 660px;
`;

const StyledFaveTitle = styled('div')`
	align-items: center;
	display: flex;
`;

const StyledFavouriteButton = styled('button')`
	display: contents;

	svg {
		height: 24px;
		fill: ${(props) => (props.isFavouriteMovie ? colours.gold : 'hsl(0, 0%, 25%)')};
		margin-right: 8px;
		margin-bottom: 16px;
		stroke: ${(props) => (props.isFavouriteMovie ? colours.gold : 'hsl(0, 0%, 25%)')};
		stroke-width: 16px;
		width: 24px;
	}

	:hover {
		cursor: pointer;

		svg {
			stroke: ${colours.gold};
		}
	}
`;

const DetailsModal = ({
	closeOnClick,
	favouriteMovieTitles,
	isOpen,
	selectedMovieDetails,
	toggleFavouriteMovieOnClick,
}) => {
	const {
		'Bond Actor': actorName,
		'Box Office(Millions)': boxOfficeTakings,
		Description: description,
		ImageURL: imageUrl,
		Film: movieName,
		'UK release date': ukReleaseDate,
	} = selectedMovieDetails;
	const isFavouriteMovie = favouriteMovieTitles.includes(movieName);
	const title = (
		<StyledFaveTitle>
			<StyledFavouriteButton isFavouriteMovie={isFavouriteMovie} onClick={toggleFavouriteMovieOnClick(movieName)}>
				<Star />
			</StyledFavouriteButton>
			<Title text={movieName} />
		</StyledFaveTitle>
	);
	return (
		<BaseModal closeOnClick={closeOnClick} isOpen={isOpen} title={title}>
			<StyledPoster src={imageUrl} alt={`${movieName}-poster`} />
			<DescriptionList
				items={[
					{ tag: 'Release Date (UK)', description: ukReleaseDate },
					{ tag: 'Box Office (£ Millions)', description: boxOfficeTakings },
					{ tag: 'Actor', description: actorName },
					{ description: description },
				]}
			/>
		</BaseModal>
	);
};

DetailsModal.propTypes = {
	closeOnClick: PropTypes.func.isRequired,
	favouriteMovieTitles: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	selectedMovieDetails: PropTypes.shape({
		'Bond Actor': PropTypes.string.isRequired,
		'Box Office(Millions)': PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		ImageURL: PropTypes.string.isRequired,
		Film: PropTypes.string.isRequired,
		'UK release date': PropTypes.string.isRequired,
	}).isRequired,
	toggleFavouriteMovieOnClick: PropTypes.func.isRequired,
};

DetailsModal.defaultProps = {
	isOpen: false,
};

export { DetailsModal };
