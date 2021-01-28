import React from 'react';
import { PageShell } from '../components';
import { StandardBody, PageHeading } from '../typography';

const HomePage = () => (
	<PageShell>
		<PageHeading text="A Bond Like No Other" />
		<StandardBody>
			<span>
				<p>If you're looking for a website all things Bond movies, then you've come to the right place.</p>
				<p>
					Use the sidebar to select your page and always know where you are with the <i>Gold Finger.</i>
				</p>
				<p>
					<b>Movies:</b> A complete list of your Bond movies database.
				</p>
				<ul>
					<li>Click on a movie thumbnail image to see more details.</li>
					<li>Favourite movies from the details modal.</li>
					<li>Filter movies by actor or release date.</li>
					<li>Add more Bond movies to your database useing the "Create" button.</li>
				</ul>
				<p>
					<b>Favourites:</b> All of your favourite Bond movies in one place.
				</p>
			</span>
		</StandardBody>
	</PageShell>
);

HomePage.propTypes = {};

export { HomePage };
