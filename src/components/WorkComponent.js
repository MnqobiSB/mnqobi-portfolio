import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';

function Work () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--services-heading mb-md">
				My work
			</h1>
			<h2 className="heading-2 heading-2--services-heading mb-sm">
				Projects that I have built
			</h2>

			<section className="projects">
				<div className="project">
					<img
						src="natours.PNG"
						alt="Natours Project"
						className="project__img"
						loading="lazy"
						title="Natours Project"
					/>
					<h3 className="project__name heading-3">Natours Website</h3>
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
								icon="compass"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				<div className="project">
					<img
						src="trillo.PNG"
						alt="Trillo Project"
						className="project__img"
						loading="lazy"
						title="Trillo Project"
					/>
					<h3 className="project__name heading-3">Trillo Website</h3>
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
								icon="compass"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				<div className="project">
					<img
						src="nexter.PNG"
						alt="Nexter Project"
						className="project__img"
						loading="lazy"
						title="Nexter Project"
					/>
					<h3 className="project__name heading-3">Nexter Website</h3>
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
								icon="compass"
								color="#000"
							/>
							Live Demo
						</a>
					</div>
				</div>

				<div className="project">
					<img
						src="maze.PNG"
						alt="Maze Project"
						className="project__img"
						loading="lazy"
						title="Maze Project"
					/>
					<h3 className="project__name heading-3">Maze Website</h3>
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
								icon="compass"
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
