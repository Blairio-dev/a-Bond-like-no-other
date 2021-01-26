import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { StandardLabel } from '../typography';
import { colours, marginExternal } from '../assets/tokens';

const StyledTextInput = styled('input')`
	border: 2px solid black;
	border-radius: 4px;
	font-size: 16px;
	padding: 8px;

	:focus {
		border-color: ${colours.gold};
		outline: 0;
	}
`;

const StyledWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	${marginExternal}

	label {
		margin-bottom: 8px;
	}
`;

const TextInput = ({ id, labelText, onChange }) => (
	<StyledWrapper>
		<StandardLabel htmlFor={id} text={`${labelText}:`} />
		<StyledTextInput id={id} name={id} onChange={onChange} type="text" value="" />
	</StyledWrapper>
);

TextInput.propTypes = {
	id: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { TextInput };
