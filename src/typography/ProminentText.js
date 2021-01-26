import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledText = styled('span')`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 8px;
	margin-top: 0;
`;

const ProminentText = ({ text }) => <StyledText>{text}</StyledText>;

ProminentText.propTypes = {
	text: PropTypes.node.isRequired,
};

export { ProminentText };
