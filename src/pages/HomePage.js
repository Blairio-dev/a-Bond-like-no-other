import React from 'react';
import { PageShell } from '../components';
import { StandardText, PageHeading } from '../typography';

const HomePage = () => (
	<PageShell>
		<PageHeading text="A Bond Like No Other" />
		<StandardText
			text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book."
		/>
	</PageShell>
);

HomePage.propTypes = {};

export { HomePage };
