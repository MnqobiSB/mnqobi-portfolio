import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () {
	const [ checked, setChecked ] = React.useState(false);

	function toggleCheck () {
		if (window.innerWidth <= 800) {
			setChecked((ifChecked) => !ifChecked);
		}
	}

	return (
		<React.Fragment>
			<div className="navigation">
				<input
					type="checkbox"
					className="navigation__checkbox"
					id="navi-toggle"
					checked={checked}
					onChange={toggleCheck}
				/>
				<label htmlFor="navi-toggle" className="navigation__button">
					<span className="navigation__icon">&nbsp;</span>
				</label>

				<div className="navigation__background">&nbsp;</div>

				<nav className="navigation__nav">
					<ul className="navigation__list">
						<li className="navigation__item">
							<NavLink
								to="/home"
								className="navigation__link"
								onClick={toggleCheck}
							>
								Home
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/about-me"
								className="navigation__link"
								onClick={toggleCheck}
							>
								About me
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/my-skills"
								className="navigation__link"
								onClick={toggleCheck}
							>
								My Skills
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/education"
								className="navigation__link"
								onClick={toggleCheck}
							>
								My Education
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/services"
								className="navigation__link"
								onClick={toggleCheck}
							>
								My Services
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/my-work"
								className="navigation__link"
								onClick={toggleCheck}
							>
								My Work
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/contact-me"
								className="navigation__link"
								onClick={toggleCheck}
							>
								Contact me
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</React.Fragment>
	);
}

export default Header;
