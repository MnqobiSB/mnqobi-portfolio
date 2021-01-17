import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () {
	const [ checked, setChecked ] = React.useState(false);

	function toggleCheck () {
		if (window.innerWidth <= 900) {
			setChecked((ifChecked) => !ifChecked);
		}
	}

	return (
		<div className="container">
			<div className="navigation">
				<div className="navigation__logo-box">
					<img
						src="logo.png"
						alt="Mnqobi's logo"
						className="navigation__logo"
					/>
					<p className="navigation__title">
						<span className="color-accent">&lt;</span>mnqobi{''}
						<span className="color-accent">&frasl;&gt;</span>
					</p>
				</div>

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
								Skills
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/education"
								className="navigation__link"
								onClick={toggleCheck}
							>
								Education
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/services"
								className="navigation__link"
								onClick={toggleCheck}
							>
								Services
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/my-work"
								className="navigation__link"
								onClick={toggleCheck}
							>
								Projects
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
		</div>
	);
}

export default Header;
