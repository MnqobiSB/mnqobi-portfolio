import React from 'react';
import { NavLink } from 'react-router-dom';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';

function Work () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--services-heading mb-md">
				My work
			</h1>
			<h2 className="heading-2 heading-2--services-heading mb-sm">
				Projects I have done
			</h2>

			<section className="projects">
				<div className="project">
					<img
						src="project.jpg"
						alt="Project 1"
						className="project__img"
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
						<NavLink to="#" className="project__btn">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</NavLink>
						<NavLink to="#" className="project__btn">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="compass"
								color="#000"
							/>
							Live Demo
						</NavLink>
					</div>
				</div>

				<div className="project">
					<img
						src="project.jpg"
						alt="Project 1"
						className="project__img"
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
						<NavLink to="#" className="project__btn">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</NavLink>
						<NavLink to="#" className="project__btn">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="compass"
								color="#000"
							/>
							Live Demo
						</NavLink>
					</div>
				</div>

				<div className="project">
					<img
						src="project.jpg"
						alt="Project 1"
						className="project__img"
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
						<NavLink to="#" className="project__btn">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="github"
								color="#000"
							/>
							View Code
						</NavLink>
						<NavLink to="#" className="project__btn">
							<IcomoonReact
								className="svg"
								iconSet={iconSet}
								icon="compass"
								color="#000"
							/>
							Live Demo
						</NavLink>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Work;
