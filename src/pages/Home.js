import React from 'react';
import { Page } from '../components';
import { Body, PageHeading } from '../typography';

const Home = () => (
	<Page>
		<PageHeading text="A Bond Like No Other" />
		<Body
			text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book."
		/>
	</Page>
);

export { Home };
