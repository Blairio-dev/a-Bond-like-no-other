import React from 'react';
import styled from '@emotion/styled';
import { ActionButton } from './ActionButton';
import { Select } from './Select';
import { CreateModal } from './CreateModal';
import { marginExternal, paddingInternalRegular } from '../assets/tokens';

const StyledWrapper = styled('div')`
	background: hsl(0deg 0% 18%);
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	${marginExternal}
	${paddingInternalRegular}
`;

const Toolbar = ({ closeCreateOnClickHandler, createModalIsOpen, openCreateOnClickHandler }) => (
	<StyledWrapper>
		<Select
			id="filter-select"
			labelText="Filter by:"
			onChange={() => {}}
			selectOptions={['None', 'Actor', 'Release Date']}
		/>
		<ActionButton labelText="Create" onClick={() => openCreateOnClickHandler()} />
		{createModalIsOpen && <CreateModal closeOnClick={() => closeCreateOnClickHandler()} isOpen={createModalIsOpen} />}
	</StyledWrapper>
);

Toolbar.propTypes = {};

export { Toolbar };
