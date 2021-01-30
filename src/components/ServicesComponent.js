import React from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';
import { FadeTransform, Fade } from 'react-animation-components';

function Services () {
	return (
		<div className="container container--about">
			<h1 className="heading-1 heading-1--page-heading mb-sm">
				<FadeTransform
					in
					transformProps={{
						exitTransform: 'scale(0.5) translatex(-50%)'
					}}
				>
					My <span className="color-accent">Services</span>
				</FadeTransform>
			</h1>
			<h2 className="heading-2 heading-2--page-heading mb-md">
				<Fade in>Things I can do</Fade>
			</h2>

			<section className="services">
				<Fade in>
					<div className="service service--first-child">
						<IcomoonReact
							className="service__icon service__icon--1"
							iconSet={iconSet}
							icon="embed"
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
				</Fade>

				<Fade in>
					<div className="service">
						<IcomoonReact
							className="service__icon"
							iconSet={iconSet}
							icon="devices"
							color="#faf9f9"
						/>
						<h3 className="heading-3 heading-3--dark">
							Responsive Design
						</h3>
						<p className="service__text">
							Able to use CSS and sometimes JS build fully
							responsible websites that look great on various
							devices.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="service">
						<IcomoonReact
							className="service__icon"
							iconSet={iconSet}
							icon="design_services"
							color="#faf9f9"
						/>
						<h3 className="heading-3 heading-3--dark">
							UX/UI Design
						</h3>
						<p className="service__text">
							Before I start coding a project, I emplement UX/UI
							design and plan for everything, then I know what I'm
							coding.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="service">
						<IcomoonReact
							className="service__icon"
							iconSet={iconSet}
							icon="accessibility_new"
							color="#faf9f9"
						/>
						<h3 className="heading-3 heading-3--dark">
							Web Accessibility
						</h3>
						<p className="service__text">
							Able to meet the W3C minimum Accessibility
							requirements to make my websites accessible to
							disabled users.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="service">
						<IcomoonReact
							className="service__icon"
							iconSet={iconSet}
							icon="trophy"
							color="#faf9f9"
						/>
						<h3 className="heading-3 heading-3--dark">SEO</h3>
						<p className="service__text">
							I know how to use HTML tools to apply website SEO
							best practices and boost search engine ranking.
						</p>
					</div>
				</Fade>

				<Fade in>
					<div className="service">
						<IcomoonReact
							className="service__icon"
							iconSet={iconSet}
							icon="bullhorn"
							color="#faf9f9"
						/>
						<h3 className="heading-3">DIGITAL MARKETING</h3>
						<p className="service__text">
							Able to emplement various Digital Marketing
							techniques to boost website traffic and target
							desired audiences.
						</p>
					</div>
				</Fade>
			</section>
		</div>
	);
}

export default Services;
