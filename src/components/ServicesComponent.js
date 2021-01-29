import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';

function Services () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--page-heading mb-md">
				My services
			</h1>
			<h2 className="heading-2 heading-2--page-heading mb-sm">
				Things I can do
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
						Able to build various types of websites, from simple
						brochure websites to advanced full stack web apps.
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
						Able to use CSS and sometimes JS build fully responsible
						websites that look great on various devices.
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
						Before I start coding a project, I emplement UX/UI
						design and plan for everything, then I know what I'm
						coding.
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
						Able to meet the W3C minimum Accessibility requirements
						to make my websites accessible to disabled users.
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
						I know how to use HTML tools to apply website SEO best
						practices and boost search engine ranking.
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
						Able to emplement various Digital Marketing techniques
						to boost website traffic and target desired audiences.
					</p>
				</div>
			</section>
		</div>
	);
}

export default Services;
