import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyleHeading = styled('h1')`
	color: white;
	margin-bottom: 16px;
	margin-top: 0;
`;

const PageHeading = ({ text }) => <StyleHeading>{text}</StyleHeading>;

PageHeading.propTypes = {
	text: PropTypes.node.isRequired,
};

export { PageHeading };
