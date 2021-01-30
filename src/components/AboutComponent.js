import React from 'react';
import { FadeTransform, Fade } from 'react-animation-components';

function About () {
	return (
		<div className="container container--about">
			<div className="about__picture">
				<FadeTransform
					in
					transformProps={{
						exitTransform: 'scale(0.5) translatey(-50%)'
					}}
				>
					<img
						src="about-me.png"
						alt="Amandla Mzolo"
						className="about__img"
						loading="lazy"
						title="Logo"
					/>
				</FadeTransform>
			</div>

			<div className="about__content">
				<Fade in>
					<h1 className="heading-1 mb-sm">About me</h1>
					<h2 className="heading-2 mb-md">Who am I</h2>

					<p className="home__text mb-sm">
						My name is Amandla Mnqobi Mzolo. I am a self-taught and
						self-motivated web developer. I learned how to code
						using various online learning platforms. I followed a
						strict logical curriculum that I build after doing an
						extensive research on learning web development.{' '}
					</p>
					<p className="home__text mb-sm">
						I first decided to go into web development back in
						January 2019. My first career was IT Support Technician
						and it did not really fulfill me. The moment I started
						learning web development, I was hooked immediately, and
						my creativity awoke. I have been at it since then and
						I've never been more satisfied and focused with what I
						do.
					</p>
					<p className="home__text mb-md">
						I specialize in and enjoy working with the JavaScript
						stack. I love challenging myself, solving problems,
						working in a team or alone, critical thinking, and
						coffee. I have personal projects that I started, run and
						maintain. My hobbies are reading, blogging, playing
						video games, skateboarding and listeng to music.
					</p>
					<a
						href="Mnqobi-Developer-Resume.pdf"
						className="btn"
						target="_blank"
						rel="noreferrer"
					>
						Download my CV &rarr;
					</a>
				</Fade>
			</div>
		</div>
	);
}

export default About;
