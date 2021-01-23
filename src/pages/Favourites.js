import React from 'react';
import { Page } from '../components';
import { Body, PageHeading } from '../typography';

const Favourites = () => (
	<Page>
		<PageHeading text="Favourites" />
		<Body
			text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book."
		/>
	</Page>
);

export { Favourites };
