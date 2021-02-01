import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';
import { FadeTransform, Fade } from 'react-animation-components';

function Work () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--page-heading mb-sm">
				<FadeTransform
					in
					transformProps={{
						exitTransform: 'scale(0.5) translatex(-50%)'
					}}
				>
					My <span className="color-accent">Work</span>
				</FadeTransform>
			</h1>
			<h2 className="heading-2 heading-2--page-heading mb-md">
				<Fade in>Projects I have built</Fade>
			</h2>

			<section className="projects">
				<Fade in>
					<div className="project">
						<img
							src="natours.PNG"
							alt="Natours Project"
							className="project__img"
							loading="lazy"
							title="Natours Project"
						/>
						<h3 className="project__name heading-3">
							Natours Website
						</h3>
						<div className="project__technology project__technology--top">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="html-five"
								color="#e34c26"
							/>
							<p>HTML5</p>
						</div>
						<div className="project__technology project__technology--top">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="css3"
							/>
							<p>CSS3</p>
						</div>
						<div className="project__technology">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="javascript"
							/>
							<p>JavaScript</p>
						</div>
						<div className="project__technology">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="sass"
							/>
							<p>Sass</p>
						</div>
						<div className="project__buttons">
							<a
								href="https://github.com/MnqobiSB/natours-sass-project"
								className="project__btn"
								target="_blank"
								rel="noreferrer"
							>
								<IcomoonReact
									className="svg"
									iconSet={iconSet}
									icon="github"
									color="#000"
								/>
								View Code
							</a>
							<a
								href="https://mnqobisb.github.io/natours-sass-project/"
								className="project__btn"
								target="_blank"
								rel="noreferrer"
							>
								<IcomoonReact
									className="svg"
									iconSet={iconSet}
									icon="paper-plane"
									color="#000"
								/>
								Live Demo
							</a>
						</div>
					</div>
				</Fade>

				<Fade in>
					<div className="project">
						<img
							src="trillo.PNG"
							alt="Trillo Project"
							className="project__img"
							loading="lazy"
							title="Trillo Project"
						/>
						<h3 className="project__name heading-3">
							Trillo Website
						</h3>
						<div className="project__technology project__technology--top">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="html-five"
								color="#e34c26"
							/>
							<p>HTML5</p>
						</div>
						<div className="project__technology project__technology--top">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="css3"
							/>
							<p>CSS3</p>
						</div>
						<div className="project__technology">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="sass"
							/>
							<p>Sass</p>
						</div>
						<div className="project__buttons">
							<a
								href="https://github.com/MnqobiSB/trillo-project-css-flexbox"
								className="project__btn"
								target="_blank"
								rel="noreferrer"
							>
								<IcomoonReact
									className="svg"
									iconSet={iconSet}
									icon="github"
									color="#000"
								/>
								View Code
							</a>
							<a
								href="https://mnqobisb.github.io/trillo-project-css-flexbox/"
								className="project__btn"
								target="_blank"
								rel="noreferrer"
							>
								<IcomoonReact
									className="svg"
									iconSet={iconSet}
									icon="paper-plane"
									color="#000"
								/>
								Live Demo
							</a>
						</div>
					</div>
				</Fade>

				<Fade in>
					<div className="project">
						<img
							src="nexter.PNG"
							alt="Nexter Project"
							className="project__img"
							loading="lazy"
							title="Nexter Project"
						/>
						<h3 className="project__name heading-3">
							Nexter Website
						</h3>
						<div className="project__technology project__technology--top">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="html-five"
								color="#e34c26"
							/>
							<p>HTML5</p>
						</div>
						<div className="project__technology project__technology--top">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="css3"
							/>
							<p>CSS3</p>
						</div>
						<div className="project__technology">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="sass"
							/>
							<p>Sass</p>
						</div>
						<div className="project__buttons">
							<a
								href="https://github.com/MnqobiSB/nexter-project-css-grid"
								className="project__btn"
								target="_blank"
								rel="noreferrer"
							>
								<IcomoonReact
									className="svg"
									iconSet={iconSet}
									icon="github"
									color="#000"
								/>
								View Code
							</a>
							<a
								href="https://mnqobisb.github.io/nexter-project-css-grid/"
								className="project__btn"
								target="_blank"
								rel="noreferrer"
							>
								<IcomoonReact
									className="svg"
									iconSet={iconSet}
									icon="paper-plane"
									color="#000"
								/>
								Live Demo
							</a>
						</div>
					</div>
				</Fade>

				<div className="project">
					<img
						src="movie-app.PNG"
						alt="Movie App"
						className="project__img"
						loading="lazy"
						title="Movie App"
					/>
					<h3 className="project__name heading-3">Movie App</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/movieapp"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://movie-app-395ce.web.app/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				<div className="project">
					<img
						src="weather-app.PNG"
						alt="Weather App"
						className="project__img"
						loading="lazy"
						title="Weather App"
					/>
					<h3 className="project__name heading-3">Weather App</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/weather-anywhere"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://weather-app-6c084.web.app/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				<div className="project">
					<img
						src="museum-of-candy.PNG"
						alt="Museum of Candy"
						className="project__img"
						loading="lazy"
						title="Museum of Candy"
					/>
					<h3 className="project__name heading-3">Museum of Candy</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="bootstrap"
						/>
						<p>Bootstrap</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/museum-of-candy"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://mnqobisb.github.io/museum-of-candy/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				<div className="project">
					<img
						src="colorGame.PNG"
						alt="Color Game"
						className="project__img"
						loading="lazy"
						title="Color Game"
					/>
					<h3 className="project__name heading-3">Color Game</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/color-guessing-game"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://mnqobisb.github.io/color-guessing-game/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				{/* Todo App Start */}
				<div className="project">
					<img
						src="js-todo-app.PNG"
						alt="ToDo App"
						className="project__img"
						loading="lazy"
						title="ToDo App"
					/>
					<h3 className="project__name heading-3">ToDo App</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/js-todo-app"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://mnqobisb.github.io/js-todo-app/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				{/* My Portfolio Start */}
				<div className="project">
					<img
						src="my-portfolio.PNG"
						alt="My Portfolio"
						className="project__img"
						loading="lazy"
						title="My Portfolio"
					/>
					<h3 className="project__name heading-3">My Portfolio</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="react"
						/>
						<p>React</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="node-dot-js"
						/>
						<p>Node.js</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/mnqobi-portfolio"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://wonderful-tesla-76c589.netlify.app/home"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				{/* Ecommerce App Start */}
				<div className="project">
					<img
						src="js-ecomm.PNG"
						alt="Ecommerce App"
						className="project__img"
						loading="lazy"
						title="Ecommerce App"
					/>
					<h3 className="project__name heading-3">Ecommerce App</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="node-dot-js"
						/>
						<p>Node.js</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="npm"
						/>
						<p>NPM</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/vanilla-js-ecomm-app"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://nodejs-ecommerce-app.herokuapp.com/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				{/* YelpCamp Start */}
				<div className="project">
					<img
						src="yelpcamp.PNG"
						alt="Yelp Camp"
						className="project__img"
						loading="lazy"
						title="Yelp Camp"
					/>
					<h3 className="project__name heading-3">Yelp Camp</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="bootstrap"
						/>
						<p>Bootstrap</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="node-dot-js"
						/>
						<p>Node.js</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="mongodb"
						/>
						<p>Mongo DB</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/YelpCamp"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://warm-cliffs-43466.herokuapp.com/campgrounds"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				{/* Personal Blog */}
				<div className="project">
					<img
						src="suburban-digi-hustle.PNG"
						alt="My Blog"
						className="project__img"
						loading="lazy"
						title="My Blog"
					/>
					<h3 className="project__name heading-3">My Blog</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="css3"
						/>
						<p>CSS3</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="bootstrap"
						/>
						<p>Bootstrap</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="node-dot-js"
						/>
						<p>Node.js</p>
					</div>
					<div className="project__technology">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="mongodb"
						/>
						<p>Mongo DB</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/personal-blog-project"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://stark-fjord-02233.herokuapp.com/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				{/* Maze Game */}
				<div className="project">
					<img
						src="maze.PNG"
						alt="Maze Project"
						className="project__img"
						loading="lazy"
						title="Maze Project"
					/>
					<h3 className="project__name heading-3">Maze Game</h3>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<p>HTML5</p>
					</div>
					<div className="project__technology project__technology--top">
						<IcomoonReact
							className="svg"
							iconSet={iconSet}
							icon="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className="project__buttons">
						<a
							href="https://github.com/MnqobiSB/mazegame"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</a>
						<a
							href="https://mnqobisb.github.io/mazegame/"
							className="project__btn"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="paper-plane"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Work;
