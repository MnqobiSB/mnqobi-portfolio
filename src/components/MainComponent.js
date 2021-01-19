import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Services from './ServicesComponent';
import Work from './WorkComponent.js';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapDispatchToProps = (dispatch) => ({
	resetFeedbackForm: () => {
		dispatch(actions.reset('feedback'));
	},
	postFeedback: (name, email, message) =>
		dispatch(postFeedback(name, email, message))
});

function Main () {
	return (
		<div>
			<Header />
			<TransitionGroup>
				<CSSTransition classNames="page" timeout={300}>
					<Switch>
						<Route path="/home" component={() => <Home />} />
						<Route
							exact
							path="/about-me"
							component={() => <About />}
						/>
						<Route
							exact
							path="/my-skills"
							component={() => <Skills />}
						/>
						<Route
							exact
							path="/my-services"
							component={() => <Services />}
						/>
						<Route
							exact
							path="/my-work"
							component={() => <Work />}
						/>
						<Route
							exact
							path="/contact-me"
							component={() => <Contact />}
						/>
						<Redirect to="/home" />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</div>
	);
}

export default withRouter(connect(mapDispatchToProps)(Main));
