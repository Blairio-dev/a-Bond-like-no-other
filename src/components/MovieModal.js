import React from 'react';
import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';
import { Body, Title } from '../typography';
import PropTypes from 'prop-types';
import colours from '../assets/colours.json';
import { ReactComponent as Star } from '../assets/star.svg';

injectGlobal(`
	.has-session-timeout-takeover {
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

	svg {
		height: 24px;
		margin-bottom: 16px;
		margin-right: 8px;
		stroke: grey;
		stroke-width: 16px;
		width: 24px;
	}
`;

const StyledFavouriteButton = styled('button')`
	display: contents;

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
	actorName,
	boxOfficeTakings,
	description,
	imageUrl,
	isOpen,
	movieName,
	onClick,
	ukReleaseDate,
}) => (
	<StyledWrapper isOpen={isOpen}>
		{isOpen
			? document.body.classList.add('has-session-timeout-takeover')
			: document.body.classList.remove('has-session-timeout-takeover')}
		<StyledModal>
			<StyledTopBar>
				<StyledFaveTitle>
					<StyledFavouriteButton onClick={() => console.log('Faved!')}>
						<Star />
					</StyledFavouriteButton>
					<Title text={movieName} />
				</StyledFaveTitle>
				<StyledCloseButton onClick={onClick}>Close</StyledCloseButton>
			</StyledTopBar>
			<StyledPoster src={imageUrl} alt={`${movieName}-poster`} />
			<Body text={ukReleaseDate} />
			<Body text={actorName} />
			<Body text={boxOfficeTakings} />
			<Body text={description} />
		</StyledModal>
	</StyledWrapper>
);

MovieModal.propTypes = {
	actorName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	movieName: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	boxOfficeTakings: PropTypes.string.isRequired,
	ukReleaseDate: PropTypes.string.isRequired,
};

MovieModal.defaultProps = {
	isOpen: false,
};

export { MovieModal };
