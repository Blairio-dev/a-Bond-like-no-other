import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { StandardLabel } from '../typography';
import { colours, marginExternal } from '../assets/tokens';

const StyledBaseInput = styled('input')`
	border: 2px solid ${colours.white};
	border-radius: 4px;
	font-family: Lato, sans-serif;
	font-size: 16px;
	height: 18px;
	padding: 8px;

	:focus {
		border-color: ${colours.gold};
		outline: 0;
	}
`;

const StyledWrapper = styled('div')`
	${(props) => props.isRow && 'align-items: center;'}
	display: flex;
	flex-direction: ${(props) => (props.isRow ? 'row' : 'column')};
	${marginExternal}

	label {
		${(props) => !props.isRow && 'margin-bottom: 8px;'}
	}
`;

const onChangeHandler = ({ target }, onChange, customValidation) => {
	const { setCustomValidity, value } = target;
	if (customValidation) {
		if (customValidation.checkIsValid(value)) {
			target.setCustomValidity('');
		} else {
			target.setCustomValidity(customValidation.validationMessage);
		}
	}
	onChange({
		setCustomValidity,
		value,
	});
};

const BaseInput = ({ customValidation, id, labelText, onChange, isRequired, isRow, type, step, value }) => (
	<StyledWrapper isRow={isRow}>
		<StandardLabel htmlFor={id} text={`${labelText}:`} />
		<StyledBaseInput
			id={id}
			name={id}
			onChange={(event) => onChangeHandler(event, onChange, customValidation)}
			required={isRequired}
			step={step}
			type={type}
			value={value}
		/>
	</StyledWrapper>
);

BaseInput.propTypes = {
	customValidation: PropTypes.shape({
		checkIsValid: PropTypes.func.isRequired,
		validationMessage: PropTypes.string.isRequired,
	}),
	id: PropTypes.string.isRequired,
	isRequired: PropTypes.bool.isRequired,
	isRow: PropTypes.bool,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	step: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

BaseInput.defaultProps = {
	isRequired: false,
	isRow: false,
};

export { BaseInput };
