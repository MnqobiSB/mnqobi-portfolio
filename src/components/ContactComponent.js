import React from 'react';
// import { Link } from 'react-router-dom';

function Contact () {
	return (
		<div className="container">
			<h1 className="heading-1 heading-1--services-heading mb-md">
				Contact me
			</h1>
			<h2 className="heading-2 heading-2--services-heading mb-sm">
				Do you want to work with me? Send me a message
			</h2>

			<div className="contact__picture">
				<img
					src="contact-1.svg"
					alt="Contact illustration"
					className="contact__img"
				/>
			</div>

			<div className="contact__content">Contact form</div>
		</div>
	);
}

export default Contact;
