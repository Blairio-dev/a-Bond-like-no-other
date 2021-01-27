import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from '.';

const NumberInput = ({ id, labelText, onChange, isRequired, value }) => (
	<BaseInput
		id={id}
		labelText={labelText}
		onChange={onChange}
		isRequired={isRequired}
		type="number"
		step=".1"
		value={value}
	/>
);

NumberInput.propTypes = {
	id: PropTypes.string.isRequired,
	isRequired: PropTypes.bool.isRequired,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export { NumberInput };
