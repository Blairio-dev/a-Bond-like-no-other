import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colours, marginExternal } from '../assets/tokens';
import { StandardLabel } from '../typography';

const StyledTextArea = styled('textarea')`
	border: 2px solid black;
	border-radius: 4px;
	font-family: Lato, sans-serif;
	font-size: 16px;
	max-height: 152px;
	padding: 8px;
	resize: vertical;

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

const onChangeHandler = ({ target }, onChange) => {
	const { value } = target;
	onChange({
		value,
	});
};

const TextArea = ({ id, labelText, onChange, isRequired, value }) => (
	<StyledWrapper>
		<StandardLabel htmlFor={id} text={`${labelText}:`} />
		<StyledTextArea id={id} onChange={(event) => onChangeHandler(event, onChange)} required={isRequired} value={value} />
	</StyledWrapper>
);

TextArea.propTypes = {
	id: PropTypes.string.isRequired,
	isRequired: PropTypes.bool.isRequired,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
	isRequired: false,
};

export { TextArea };
