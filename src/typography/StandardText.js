import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledBody = styled('span')`
	color: white;
	font-size: 16px;
	margin-bottom: 8px;
	margin-top: 0;
`;

const StandardText = ({ text }) => <StyledBody>{text}</StyledBody>;

StandardText.propTypes = {
	text: PropTypes.node.isRequired,
};

export { StandardText };
