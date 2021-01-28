import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from '.';

const DateInput = ({ id, labelText, onChange, isRequired, isRow, value }) => (
	<BaseInput
		id={id}
		labelText={labelText}
		onChange={onChange}
		isRequired={isRequired}
		isRow={isRow}
		type="date"
		value={value}
	/>
);

DateInput.propTypes = {
	id: PropTypes.string.isRequired,
	isRequired: PropTypes.bool.isRequired,
	isRow: PropTypes.bool,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export { DateInput };
