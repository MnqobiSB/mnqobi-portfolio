import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
	constructor (props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (values) {
		this.props.postFeedback(values.name, values.email, values.message);
		console.log('Thank you for your feedback!\n' + JSON.stringify(values));
		alert('Thank you for your feedback!\n' + JSON.stringify(values));
		this.props.resetFeedbackForm();
	}

	render () {
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
						src="about-me.png"
						alt="Contact illustration"
						className="contact__img"
					/>
				</div>

				<div className="contact__content">
					<p className="home__text">Phone, email, numbers</p>
					<Link to="/contact" className="btn">
						Download my CV &rarr;
					</Link>
				</div>
			</div>
		);
	}
}

export default Contact;
