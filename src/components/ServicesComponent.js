import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';

function Services () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--services-heading mb-md">
				My services
			</h1>
			<h2 className="heading-2 heading-2--services-heading mb-sm">
				What I can do
			</h2>
			<section className="services">
				<div className="service">
					<IcomoonReact
						className="service__icon service__icon--1"
						iconSet={iconSet}
						icon="embed2"
						color="#00ad45"
					/>
					<h3 className="heading-3 heading-3--dark">
						Web Development
					</h3>
					<p className="service__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="service">
					<IcomoonReact
						className="service__icon"
						iconSet={iconSet}
						icon="mobile"
						color="#faf9f9"
					/>
					<h3 className="heading-3 heading-3--dark">
						Responsive Design
					</h3>
					<p className="service__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="service">
					<IcomoonReact
						className="service__icon"
						iconSet={iconSet}
						icon="images"
						color="#faf9f9"
					/>
					<h3 className="heading-3 heading-3--dark">UX/UI Design</h3>
					<p className="service__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="service">
					<IcomoonReact
						className="service__icon"
						iconSet={iconSet}
						icon="w3c"
						color="#faf9f9"
					/>
					<h3 className="heading-3 heading-3--dark">
						Web Accessibility
					</h3>
					<p className="service__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="service">
					<IcomoonReact
						className="service__icon"
						iconSet={iconSet}
						icon="trophy"
						color="#faf9f9"
					/>
					<h3 className="heading-3 heading-3--dark">SEO</h3>
					<p className="service__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>

				<div className="service">
					<IcomoonReact
						className="service__icon"
						iconSet={iconSet}
						icon="stats-dots"
						color="#faf9f9"
					/>
					<h3 className="heading-3">DIGITAL MARKETING</h3>
					<p className="service__text">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit.
					</p>
				</div>
			</section>
		</div>
	);
}

export default Services;
