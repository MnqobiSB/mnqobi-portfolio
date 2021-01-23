import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
	return (
		<div className="container">
			<div className="home__content">
				<p className="home__text mb-md">Hi there! I am</p>
				<h1 className="heading-1 heading-1--dark mb-md">
					Amandla Mnqobi Mzolo
				</h1>
				<h2 className="heading-2 mb-sm">
					Front-End Web Developer / Designer
				</h2>

				<p className="home__text">Welcome to my personal portfolio!</p>
				<Link to="/contact-me" className="btn">
					Hire me &rarr;
				</Link>
			</div>

			<div className="home__picture">
				<img
					src="front-end-developer.svg"
					alt="Front end developer guy"
					className="home__img"
					loading="lazy"
					title="Front end developer guy"
				/>
			</div>
		</div>
	);
}

export default Home;
