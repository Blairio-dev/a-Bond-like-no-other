import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { marginExternal } from '../assets/tokens';

const StyledText = styled('span')`
	color: red;
	font-size: 16px;
	font-weight: bold;
	${marginExternal}
	margin-top: 0;
`;

const ErrorMessage = ({ text }) => <StyledText>{text}</StyledText>;

ErrorMessage.propTypes = {
	text: PropTypes.node.isRequired,
};

export { ErrorMessage };
