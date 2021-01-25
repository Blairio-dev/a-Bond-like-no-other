import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { StandardText, ProminentText } from '../typography';

const StyledDescriptionList = styled('dl')`
	color: white;
	margin: 0;
`;

const StyledTagWrapper = styled('span')`
	margin-right: 4px;
`;

const StyledWrapper = styled('div')`
	margin-bottom: 4px;
	${(props) => !props.hasTag && 'margin-top: 16px;'}
`;

const DescriptionList = ({ items }) => (
	<StyledDescriptionList>
		{items.map(({ tag, description }) => {
			const hasTag = !!tag;
			return (
				<StyledWrapper hasTag={hasTag}>
					{tag && (
						<StyledTagWrapper>
							<ProminentText text={tag} />:
						</StyledTagWrapper>
					)}
					<StandardText text={description} />
				</StyledWrapper>
			);
		})}
	</StyledDescriptionList>
);

DescriptionList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			tag: PropTypes.string,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
};

export { DescriptionList };
