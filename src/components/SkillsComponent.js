import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';

function Skills () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--skills-heading mb-md">
				My skills
			</h1>
			<h2 className="heading-2 heading-2--skills-heading mb-sm">
				Everything I have learned so far
			</h2>
			<section className="skills">
				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="html-five"
						color="#e34c26"
					/>
					<h3 className="heading-3 heading-3--dark">HTML5</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="css3"
					/>
					<h3 className="heading-3 heading-3--dark">CSS3</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="javascript"
					/>
					<h3 className="heading-3 heading-3--dark">JavaScript</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="bootstrap"
					/>
					<h3 className="heading-3 heading-3--dark">Bootstrap</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="sass"
					/>
					<h3 className="heading-3 heading-3--dark">SASS</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="react"
					/>
					<h3 className="heading-3">REACT</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="node-dot-js"
					/>
					<h3 className="heading-3">NODE.JS</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="npm"
					/>
					<h3 className="heading-3">NPM</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="yarn"
					/>
					<h3 className="heading-3">YARN</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="git"
					/>
					<h3 className="heading-3">GIT</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="gulp"
					/>
					<h3 className="heading-3">GULP</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="heroku"
					/>
					<h3 className="heading-3">HEROKU</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="visualstudiocode"
					/>
					<h3 className="heading-3">VS CODE</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="figma"
					/>
					<h3 className="heading-3">FIGMA</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="wordpress"
					/>
					<h3 className="heading-3">WORDPRESS</h3>
					<p className="skill__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>
			</section>
		</div>
	);
}

export default Skills;
