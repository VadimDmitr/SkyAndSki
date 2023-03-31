import React from "react";
import { Link } from "react-router-dom";
// import { ExternalLink } from 'react-external-link';
// import { NavLink } from "react-router-dom";
//import logo from '../img/logo.png';
//import facebook from '../img/icons/facebook.svg';
//import twitter from '../img/icons/twitter.svg';
//import instagram from '../img/icons/instagram.svg';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__main-container">
				<div className="footer__logo-container footer__logo-container--top-left"></div>
				<div className="footer__media-links">
					<h3 className="footer__media-title">Subscription</h3>
					{/* have to put it then
          <div>
            <ExternalLink className="footer__social-link" href="https://facebook.com/">
              <img className="footer__social-img" src={facebook} alt="facebook" />
            </ExternalLink>
            <ExternalLink className="footer__social-link" href="https://twitter.com/">
              <img className="footer__social-img" src={twitter} alt="twitter" />
            </ExternalLink>
            <ExternalLink className="footer__social-link" href="https://instagram.com/">
              <img className="footer__social-img" src={instagram} alt="instagram" />
            </ExternalLink>
          </div>
          */}
				</div>
				<div className="footer__company-info">
					<h3 className="footer__company-title">Company</h3>
					<Link className="footer__company-link" to={"/about"}>
						<p className="footer__company-link-text">About</p>
					</Link>
					<Link className="footer__company-link" to={"/blog"}>
						<p className="footer__company-link-text">Blog</p>
					</Link>
					<Link className="footer__company-link" to={"/contact"}>
						<p className="footer__company-link-text">Contact US</p>
					</Link>
					<Link className="footer__company-link" to={"/pricing"}>
						<p className="footer__company-link-text">Pricing</p>
					</Link>
					<Link className="footer__company-link" to={"/testimonials"}>
						<p className="footer__company-link-text">Testimonials</p>
					</Link>
				</div>

				<div className="footer__support-info">
					<h3 className="footer__support-title">Support</h3>
					<Link className="footer__support-link" to={"/help"}>
						<p className="footer__support-link-text">Help Center</p>
					</Link>
					<Link className="footer__support-link" to={"/service"}>
						<p className="footer__support-link-text">Terms of Service</p>
					</Link>
					<Link className="footer__support-link" to={"/legal"}>
						<p className="footer__support-link-text">Legal</p>
					</Link>
					<Link className="footer__support-link" to={"/privacy-policy"}>
						<p className="footer__support-link-text">Privacy Policy</p>
					</Link>
					<Link className="footer__support-link" to={"/status"}>
						<p className="footer__support-link-text">Status</p>
					</Link>
				</div>
			</div>
		</footer>
	);
};
