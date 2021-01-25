import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';
import { StandardText, Title } from '../typography';
import colours from '../assets/colours.json';
import { ReactComponent as Star } from '../assets/star.svg';
import { DescriptionList } from './DescriptionList';

injectGlobal(`
	.modal-open {
		overflow: hidden;
	}
`);

const StyledCloseButton = styled('button')`
	background: none;
	border: 1px solid black;
	border-radius: 8px;
	color: hsl(0deg 0% 100%);
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 16px;

	:focus,
	:hover {
		background: hsl(0, 150%, 20%);
		cursor: pointer;
		outline: 0;
	}
`;

const StyledPoster = styled('img')`
	border-radius: 2px;
	height: 21vh;
	margin-bottom: 16px;
	transition: transform 0.1s ease-out;
	width: 100%;
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
		margin-bottom: 16px;
		margin-right: 8px;
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

const StyledModal = styled('div')`
	background: hsl(0deg 0% 0%);
	border: 2px solid ${colours.gold};
	display: flex;
	height: fit-content;
	flex-direction: column;
	max-width: 580px;
	padding: 16px;
`;

const StyledTopBar = styled('div')`
	display: flex;
	justify-content: space-between;
`;

const StyledWrapper = styled('div')`
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	left: 0;
	height: 100vh;
	justify-content: center;
	padding: 24px;
	position: fixed;
	top: 0;
	width: 100vw;
`;

const MovieModal = ({
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
	return (
		<StyledWrapper isOpen={isOpen}>
			<StyledModal>
				<StyledTopBar>
					<StyledFaveTitle>
						<StyledFavouriteButton isFavouriteMovie={isFavouriteMovie} onClick={toggleFavouriteMovieOnClick(movieName)}>
							<Star />
						</StyledFavouriteButton>
						<Title text={movieName} />
					</StyledFaveTitle>
					<StyledCloseButton onClick={closeOnClick}>Close</StyledCloseButton>
				</StyledTopBar>
				<StyledPoster src={imageUrl} alt={`${movieName}-poster`} />
				<DescriptionList
					items={[
						{ tag: 'Release Date (UK)', description: ukReleaseDate },
						{ tag: 'Box Office (£ Millions)', description: boxOfficeTakings },
						{ tag: 'Actor', description: actorName },
						{ description: description },
					]}
				/>
			</StyledModal>
		</StyledWrapper>
	);
};

MovieModal.propTypes = {
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

MovieModal.defaultProps = {
	isOpen: false,
};

export { MovieModal };
