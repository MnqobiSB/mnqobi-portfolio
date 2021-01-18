import React from 'react';
import { NavLink } from 'react-router-dom';

function About () {
	return (
		<div className="container">
			<div className="about__content">
				<p className="about__text mb-md">Hi there! I am</p>
				<h1 className="heading-1 heading-1--dark mb-md">
					Amandla Mnqobi Mzolo
				</h1>
				<h2 className="heading-2 mb-sm">
					Front-End Web Developer / Designer
				</h2>

				<p className="about__text">Welcome to my personal portfolio!</p>
				<NavLink to="/contact" className="btn">
					Hire me &rarr;
				</NavLink>
			</div>

			<div className="about__picture">
				<img
					src="front-end-developer.svg"
					alt="Front end developer guy"
					className="about__img"
				/>
			</div>
		</div>
	);
}

export default About;
