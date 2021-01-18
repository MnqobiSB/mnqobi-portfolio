import React from 'react';
import { NavLink } from 'react-router-dom';

function About () {
	return (
		<div className="container">
			<div className="about__picture">
				<img
					src="about-me.png"
					alt="Front end developer guy"
					className="about__img"
				/>
			</div>

			<div className="about__content">
				<h1 className="heading-1 heading-1--dark mb-md">About me</h1>
				<h2 className="heading-2 mb-sm">Why hire me</h2>

				<p className="home__text">
					My name is Amandla Mnqobi Mzolo, and I am a self-taught and
					self-motivated web developer. I taught myself how to code
					using various online learning platforms. I followed a strict
					logical curriculum that I build for my self after doing an
					extensive research on learning web development. <br />
					When I first decided to go into web development it was back
					in January 2019. My first career was IT Support Technician
					and it did not really fulfill me. The moment I started with
					web development, I immediately fell in love with it, and my
					creative side awoke. I have been at it since then and I've
					never been more happier and focused with what I do. <br />
					I love challenging myself, am hard working, good at problem
					solving, able to work in a team or alone and I love my
					coffee. I have personal projects that I started, run and
					maintain. My hobbies are reading, blogging, playing video
					games, skateboarding and listeng to music.
				</p>
				<NavLink to="/contact" className="btn">
					Download my CV &rarr;
				</NavLink>
			</div>
		</div>
	);
}

export default About;
