import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledText = styled('label')`
	font-size: 16px;
	font-weight: bold;
	margin-right: 8px;
	margin-top: 0;
`;

const StandardLabel = ({ htmlFor, text }) => <StyledText htmlFor={htmlFor}>{text}</StyledText>;

StandardLabel.propTypes = {
	text: PropTypes.node.isRequired,
};

export { StandardLabel };
