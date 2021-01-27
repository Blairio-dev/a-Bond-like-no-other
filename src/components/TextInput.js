import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from '../components';

const TextInput = ({ id, labelText, onChange, isRequired, value }) => (
	<BaseInput id={id} labelText={labelText} onChange={onChange} isRequired={isRequired} type="text" value={value} />
);

TextInput.propTypes = {
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
