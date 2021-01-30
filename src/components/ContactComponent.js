import React, { Component } from 'react';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';
import axios from 'axios';
import { FadeTransform, Fade } from 'react-animation-components';

class Contact extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		sent: false
	};

	handleName = (e) => {
		this.setState({ name: e.target.value });
	};

	handleEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	handleMessage = (e) => {
		this.setState({ message: e.target.value });
	};

	formSubmit = (e) => {
		e.preventDefault();

		let data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		};

		axios({
			method: 'POST',
			url: 'https://mnqobi-portfolio-backend.herokuapp.com/api/forma',
			data: data
		})
			.then((response) => {
				this.setState(
					{
						sent: true
					},
					this.resetForm()
				);
			})
			.catch(() => {
				console.log('Message not sent');
			});
	};

	resetForm = () => {
		this.setState({
			name: '',
			email: '',
			message: ''
		});

		setTimeout(() => {
			this.setState({
				sent: false
			});
		}, 3000);
	};

	render () {
		return (
			<div className="container container--home">
				<h1 className="heading-1 heading-1--page-heading mb-sm">
					<FadeTransform
						in
						transformProps={{
							exitTransform: 'scale(0.5) translatex(-50%)'
						}}
					>
						<span className="color-accent">Contact</span> Me
					</FadeTransform>
				</h1>
				<h2 className="heading-2 heading-2--page-heading mb-md">
					<Fade in>Do you want to work with me? Get in-touch</Fade>
				</h2>

				<div className="contact__picture">
					<img
						src="contact-1.svg"
						alt="Contact me illustration"
						className="contact__img"
						loading="lazy"
						title="Contact me illustration"
					/>
				</div>

				<div className="contact__content">
					<h3 className="heading-3 heading-3--dark mb-sm">
						Contact details
					</h3>
					<p className="home__text mb-sm">
						<span className="contact__items">
							<IcomoonReact
								className="contact__icon"
								iconSet={iconSet}
								icon="phone"
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
								icon="envelope"
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
						onSubmit={this.formSubmit}
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
								onChange={this.handleName}
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
								onChange={this.handleEmail}
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
								onChange={this.handleMessage}
							/>
							<label htmlFor="message" className="form__label">
								Message
							</label>
						</div>
						<div
							className={
								this.state.sent ? (
									'form__msg form__msg--appear'
								) : (
									'form__msg'
								)
							}
						>
							Message has been sent! I will get back to you soon.
						</div>
						<div className="form__group">
							<button type="submit" className="btn form__btn">
								Send message
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
