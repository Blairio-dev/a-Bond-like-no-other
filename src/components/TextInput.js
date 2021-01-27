import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from '../components';

const TextInput = ({ customValidation, id, labelText, onChange, isRequired, value }) => (
	<BaseInput
		customValidation={customValidation}
		id={id}
		labelText={labelText}
		onChange={onChange}
		isRequired={isRequired}
		type="text"
		value={value}
	/>
);

TextInput.propTypes = {
	customValidation: PropTypes.shape({
		checkIsValid: PropTypes.func.isRequired,
		validationMessage: PropTypes.string.isRequired,
	}),
	id: PropTypes.string.isRequired,
	isRequired: PropTypes.bool.isRequired,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
	isRequired: false,
};

export { TextInput };
