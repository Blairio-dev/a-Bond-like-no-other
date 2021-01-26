import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { StandardText, ProminentText } from '../typography';
import { colours, marginExternal } from '../assets/tokens';

const StyledDescriptionList = styled('dl')`
	color: ${colours.white};
	margin: 0;
	${marginExternal}
`;

const StyledTagWrapper = styled('span')`
	margin-right: 4px;
`;

const StyledWrapper = styled('div')`
	margin-bottom: 4px;
	${(props) => !props.hasTag && 'margin-top: 16px;'}

	:last-of-type {
		margin-bottom: 0;
	}
`;

const DescriptionList = ({ items }) => (
	<StyledDescriptionList>
		{items.map(({ tag, description, index }) => {
			const hasTag = !!tag;
			const key = tag ? tag + index : `description-${index}`;
			return (
				<StyledWrapper hasTag={hasTag} key={key}>
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
