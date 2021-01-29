import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';
import { FadeTransform, Fade } from 'react-animation-components';

function Skills () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--page-heading mb-sm">
				<FadeTransform
					in
					transformProps={{
						exitTransform: 'scale(0.5) translatex(-50%)'
					}}
				>
					My skills
				</FadeTransform>
			</h1>

			<h2 className="heading-2 heading-2--page-heading mb-md">
				<Fade in>Skills that I have learned so far</Fade>
			</h2>

			<section className="skills">
				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="html-five"
							color="#e34c26"
						/>
						<h3 className="heading-3 heading-3--dark">HTML5</h3>
						<p className="skill__text">
							Competent in HTML5. Able to apply it semantically to
							improve accessibility and SEO.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="css3"
						/>
						<h3 className="heading-3 heading-3--dark">CSS3</h3>
						<p className="skill__text">
							Able to code different layouts and apply advanced
							techniques to style a page the way I want.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="javascript"
						/>
						<h3 className="heading-3 heading-3--dark">
							JavaScript
						</h3>
						<p className="skill__text">
							Able to use JavaScript tools to solve software
							problems. Competent in vanilla JS, ES6 and JS
							libraries.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="bootstrap"
						/>
						<h3 className="heading-3 heading-3--dark">Bootstrap</h3>
						<p className="skill__text">
							Able to use the Bootstrap library to build various
							layouts and functionality.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="sass"
						/>
						<h3 className="heading-3 heading-3--dark">SASS</h3>
						<p className="skill__text">
							Able to use Sass tools to make coding CSS managable,
							maintainable and easy to scale.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="react"
						/>
						<h3 className="heading-3">REACT</h3>
						<p className="skill__text">
							Compete with React. Able to use React tools and best
							practices to build cool web apps &amp; SPA's.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="node-dot-js"
						/>
						<h3 className="heading-3">NODE.JS</h3>
						<p className="skill__text">
							Enjoy using Node.JS in my applications, because I
							understand well and find it easy to work with.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="skill">
						<IcomoonReact
							className="skill__icon"
							iconSet={iconSet}
							icon="npm"
						/>
						<h3 className="heading-3">NPM</h3>
						<p className="skill__text">
							I enjoy working with the JS stack and NPM is an
							important part of my work-flow.
						</p>
					</div>
				</Fade>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="yarn"
					/>
					<h3 className="heading-3">YARN</h3>
					<p className="skill__text">
						I sometimes use Yarn to manage my packages. I like use
						to when I'm working with React.
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
						Git/Github are very important tool for any developer's
						workflow. I understand Git and use it in my projects.
					</p>
				</div>

				<div className="skill">
					<IcomoonReact
						className="skill__icon"
						iconSet={iconSet}
						icon="gulp"
					/>
					<h3 className="heading-3">GRUNT</h3>
					<p className="skill__text">
						I find Grunt easy to emplement as my task runner when I
						need to run a tast runner in my projects.
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
						I understand how use Heroku tools to deploy my apps. I
						use it mostly for my full stack projects.
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
						VS Code is my favourite code editor because it has great
						tools that boost developer work-flow.
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
						I use Figma design mark-ups &amp; prototypes for my
						projects before I start coding them.
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
						I sometimes use WordPress to achieve certain goals and
						for clients that ask for it.
					</p>
				</div>
			</section>
		</div>
	);
}

export default Skills;
