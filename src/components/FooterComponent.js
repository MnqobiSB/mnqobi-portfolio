import React from 'react';
import { NavLink } from 'react-router-dom';
import iconSet from '../icomoon/selection.json';
import IcomoonReact from 'icomoon-react';

function Footer () {
	return (
		<div className="container">
			<footer className="footer">
				<img
					src="logo.png"
					alt="Mnqobi's logo"
					className="footer__logo"
				/>
				<ul className="footer__nav">
					<li className="footer__nav-item">
						<NavLink to="#" className="footer__nav-link">
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="github"
							/>
						</NavLink>
					</li>
					<li className="footer__nav-item">
						<NavLink to="#" className="footer__nav-link">
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="linkedin"
							/>
						</NavLink>
					</li>
					<li className="footer__nav-item">
						<NavLink to="#" className="footer__nav-link">
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="twitter"
							/>
						</NavLink>
					</li>
					<li className="footer__nav-item">
						<NavLink to="#" className="footer__nav-link">
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="facebook"
							/>
						</NavLink>
					</li>
				</ul>

				<p className="copyright">
					&copy; Copyright 2021{' '}
					<span className="copyright__bull">&bull;</span> Amandla's
					Portfolio <span className="copyright__bull">
						&bull;
					</span>{' '}
					All rights reserved.
				</p>

				<p className="copyright">
					Made with <span className="copyright__heart">
						&hearts;
					</span>{' '}
					by Amandla.
				</p>
			</footer>
		</div>
	);
}

export default Footer;
