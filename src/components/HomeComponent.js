import React from 'react';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function Home () {
	return (
		<div className="container container--home">
			<div className="home__content">
				<FadeTransform
					in
					transformProps={{
						exitTransform: 'scale(0.5) translatex(-50%)'
					}}
				>
					<p className="home__text mb-sm">Hi there! I am</p>
					<h1 className="heading-1 heading-1--dark mb-md">
						Amandla Mnqobi Mzolo
					</h1>
					<h2 className="heading-2 mb-md">Front-End Web Developer</h2>

					<p className="home__text mb-md">
						Welcome to my personal portfolio!
					</p>
					<Link to="/contact-me" className="btn">
						Work with me &rarr;
					</Link>
				</FadeTransform>
			</div>

			<div className="home__picture">
				<FadeTransform
					in
					transformProps={{
						exitTransform: 'scale(0.5) translatex(50%)'
					}}
				>
					<img
						src="front-end-developer.svg"
						alt="Front end developer guy"
						className="home__img"
						loading="lazy"
						title="Front end developer guy"
					/>
				</FadeTransform>
			</div>
		</div>
	);
}

export default Home;
