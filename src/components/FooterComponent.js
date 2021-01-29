import React from 'react';
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
					loading="lazy"
					title="Logo"
				/>
				<ul className="footer__nav">
					<li className="footer__nav-item">
						<a
							href="https://github.com/MnqobiSB"
							className="footer__nav-link"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="github"
							/>
						</a>
					</li>
					<li className="footer__nav-item">
						<a
							href="http://linkedin.com/in/mnqobi-mzolo-4986691a6"
							className="footer__nav-link"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="linkedin"
							/>
						</a>
					</li>
					<li className="footer__nav-item">
						<a
							href="https://twitter.com/MnqobiSb"
							className="footer__nav-link"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="twitter"
							/>
						</a>
					</li>
					<li className="footer__nav-item">
						<a
							href="https://codepen.io/dev_mnqobi"
							className="footer__nav-link"
							target="_blank"
							rel="noreferrer"
						>
							<IcomoonReact
								className="footer__nav-icon"
								iconSet={iconSet}
								icon="codepen"
							/>
						</a>
					</li>
				</ul>

				<p className="copyright">
					&copy; Copyright 2021{' '}
					<span className="copyright__bull">&bull;</span> Mnqobi's
					Portfolio <span className="copyright__bull">
						&bull;
					</span>{' '}
					All rights reserved.
				</p>

				<p className="copyright">
					Made with <span className="copyright__heart">
						&hearts;
					</span>{' '}
					by Mnqobi.
				</p>
			</footer>
		</div>
	);
}

export default Footer;
