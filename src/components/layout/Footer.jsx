import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import twitter from "images/icons/twitter.svg";
import youtube from "images/icons/youtube.svg";
import dribbble from "images/icons/dribbble.svg";
import instagram from "images/icons/instagram.svg";
import subscribe from "images/icons/subscribe.svg";

const FooterElement = styled.footer`
	// display: $ {({ currentPath }) =>
	// 		currentPath === "/" ||
	// 		currentPath === "/home" ||
	// 		currentPath === "/about" ||
	// 		currentPath === "/account" ||
	// 		currentPath === "/cart" ||
	// 		currentPath === "/checkout" ||
	// 		currentPath === "/contact" ||
	// 		currentPath === "/product" ||
	// 		currentPath === "/shop" ||
	// 		currentPath === "/login" ||
	// 		currentPath === "/logout" ||
	// 		currentPath === "/register" ||
	// 		currentPath === "/order"
	// 			? "flex"
	// 			: "none"};
`;

export const Footer = () => {
	return (
		<FooterElement className="footer">
			<div className="footer__company-column footer__links-container">
				<h3 className="footer__column-heading">Company</h3>
				<Link className="footer__link" to={"/about"}>
					About
				</Link>
				<Link className="footer__link" to={"/blog"}>
					Blog
				</Link>
				<Link className="footer__link" to={"/contact"}>
					Contact US
				</Link>
				<Link className="footer__link" to={"/pricing"}>
					Pricing
				</Link>
				<Link className="footer__link" to={"/testimonials"}>
					Testimonials
				</Link>
			</div>
			<div className="footer__support-column footer__links-container">
				<h3 className="footer__column-heading">Support</h3>
				<Link className="footer__link" to={"/help"}>
					Help Center
				</Link>
				<Link className="footer__link" to={"/service"}>
					Terms of Service
				</Link>
				<Link className="footer__link" to={"/legal"}>
					Legal
				</Link>
				<Link
					className="footer__link"
					to={"/privacy-policy"}
				>
					Privacy Policy
				</Link>
				<Link className="footer__link" to={"/status"}>
					Status
				</Link>
			</div>
			<div className="footer__social-media-container">
				<form className="footer__subscription-form">
					<input
						type="email"
						className="footer__subscription-input"
						placeholder="Your email address"
						required
					/>``
					<button type="submit" className="footer__subscribe-button">
						<img
							className="footer__subscribe-button-img"
							src={subscribe}
							alt="Subscription button"
						/>
					</button>
				</form>
				<div className="footer__social-icons">
					<ExternalLink
						className="footer__social-link"
						href="https://instagram.com/"
					>
						<img
							className="footer__social-img"
							src={instagram}
							alt="Instagram"
						/>
					</ExternalLink>
					<ExternalLink
						className="footer__social-link"
						href="https://dribbble.com/"
					>
						<img
							className="footer__social-img"
							src={dribbble}
							alt="Dribbble"
						/>
					</ExternalLink>
					<ExternalLink
						className="footer__social-link"
						href="https://twitter.com/"
					>
						<img
							className="footer__social-img"
							src={twitter}
							alt="Twitter"
						/>
					</ExternalLink>
					<ExternalLink
						className="footer__social-link"
						href="https://youtube.com/@videoproduction7283/videos"
					>
						<img
							className="footer__social-img"
							src={youtube}
							alt="Youtube"
						/>
					</ExternalLink>
				</div>
			</div>
		</FooterElement>
	);
};
