import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledText = styled('span')`
	font-size: 16px;
	margin-bottom: 8px;
	margin-top: 0;
`;

const StandardText = ({ text }) => <StyledText>{text}</StyledText>;

StandardText.propTypes = {
	text: PropTypes.node.isRequired,
};

export { StandardText };
