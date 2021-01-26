import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { DescriptionList } from './DescriptionList';
import { marginExternal } from '../assets/tokens';
import { Title } from '../typography';

const StyledButton = styled('button')`
	cursor: pointer;
	display: contents;

	:hover {
		img {
			transform: scale(1.01);
		}
	}
`;

const StyledPoster = styled('img')`
	border-radius: 2px;
	${marginExternal}
	transition: transform 0.1s ease-out;
	width: 440px;
`;

const StyledWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	flex: 1 0 15%;
`;

const PreviewPanel = ({ actorName, imageUrl, movieName, onClick, ukReleaseDate }) => (
	<StyledWrapper>
		<Title text={movieName} />
		<StyledButton onClick={onClick}>
			<StyledPoster src={imageUrl} alt={`${movieName}-poster`} />
		</StyledButton>
		<DescriptionList
			items={[
				{ tag: 'Actor', description: actorName },
				{ tag: 'Release Date (UK)', description: ukReleaseDate },
			]}
		/>
	</StyledWrapper>
);

PreviewPanel.propTypes = {
	actorName: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	movieName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	ukReleaseDate: PropTypes.string.isRequired,
};

export { PreviewPanel };
