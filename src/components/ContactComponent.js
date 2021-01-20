import React, { Component } from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';
import axios from 'axios';

class Contact extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};

		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onMsgChange = this.onMsgChange.bind(this);
	}

	onNameChange (event) {
		this.setState({ name: event.target.value });
	}
	onEmailChange (event) {
		this.setState({ email: event.target.value });
	}
	onMsgChange (event) {
		this.setState({ message: event.target.value });
	}

	submitEmail (e) {
		e.preventDefault();
		axios({
			method: 'POST',
			url: '/send',
			data: this.state
		}).then((response) => {
			if (response.data.status === 'success') {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.status === 'fail') {
				alert('Message failed to send.');
			}
		});
	}
	resetForm () {
		this.setState({ name: '', email: '', subject: '', message: '' });
	}

	render () {
		return (
			<div className="container">
				<h1 className="heading-1 heading-1--services-heading mb-md">
					Contact me
				</h1>
				<h2 className="heading-2 heading-2--services-heading mb-sm">
					Do you want to work with me? Get in-touch
				</h2>

				<div className="contact__picture">
					<img
						src="contact-1.svg"
						alt="Contact illustration"
						className="contact__img"
					/>
				</div>

				<div className="contact__content">
					<h3 className="heading-3 heading-3--dark mb-sm">
						Contact details
					</h3>
					<p className="home__text">
						<span className="contact__items">
							<IcomoonReact
								className="contact__icon"
								iconSet={iconSet}
								icon="mobile"
								color="#faf9f9"
							/>
							<a
								href="tel:+27681600538"
								className="contact__links"
							>
								+27 68 160 0538
							</a>
						</span>
						<span className="contact__items">
							<IcomoonReact
								className="contact__icon"
								iconSet={iconSet}
								icon="mail"
								color="#faf9f9"
							/>
							<a
								href="mailto:amandlamm1@gmail.com"
								className="contact__links"
							>
								amandlamm1@gmail.com
							</a>
						</span>
					</p>
					<h3 className="heading-3 heading-3--dark mb-sm">
						Send me a message
					</h3>
					<form
						id="contact-form"
						className="form"
						onSubmit={this.submitEmail}
						method="POST"
					>
						<div className="form__group">
							<input
								type="text"
								id="name"
								className="form__input"
								name="name"
								placeholder="Name"
								required
								value={this.state.name}
								onChange={this.onNameChange}
							/>
							<label htmlFor="name" className="form__label">
								Name
							</label>
						</div>
						<div className="form__group">
							<input
								type="email"
								id="email"
								className="form__input"
								name="email"
								placeholder="Email"
								required
								value={this.state.email}
								onChange={this.onEmailChange}
							/>
							<label htmlFor="name" className="form__label">
								Email
							</label>
						</div>
						<div className="form__group">
							<textarea
								className="form__input"
								id="message"
								name="message"
								placeholder="Message"
								rows="8"
								required
								value={this.state.message}
								onChange={this.onMsgChange}
							/>
							<label htmlFor="message" className="form__label">
								Message
							</label>
						</div>
						<div className="form__group">
							<button className="btn">Send message</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
