import React from 'react';
import styled from '@emotion/styled';
import colours from '../assets/colours.json';
import { ProminentText } from '../typography';

const StyledButton = styled('button')`
	background: ${colours.gold};
	border: none;
	border-radius: 8px;
	color: hsl(0, 0%, 0%);
	cursor: pointer;
	padding: 8px 12px;
	transition: transform 0.05s ease-out;
	width: min-content;

	:focus,
	:hover {
		transform: scale(1.05);
		outline: 0;
	}
`;

const ActionButton = ({ labelText, onClick }) => (
	<StyledButton onClick={onClick}>
		<ProminentText text={labelText} />{' '}
	</StyledButton>
);

ActionButton.propTypes = {};

export { ActionButton };
