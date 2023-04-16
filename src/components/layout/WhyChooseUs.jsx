import { NavLink } from "react-router-dom";
import tesla from "images/icons/why_choose_us/tesla.svg";
import docusign from "images/icons/why_choose_us/docu_sign.svg";
import maze from "images/icons/why_choose_us/maze.svg";
import uber from "images/icons/why_choose_us/uber.svg";
import miro from "images/icons/why_choose_us/miro.svg";
import discord from "images/icons/why_choose_us/discord.svg";
import whyUs from "images/why_choose_us.png";

export const WhyChooseUs = () => {
	return (
	<div className="why-choose-us-container">
		<div className="company-icons">
			<div>
				<img
					src={tesla}
					alt="Tesla"
					className="company-items__tesla"
				/>
			</div>
			<div>
				<img
					src={docusign}
					alt="DocuSign"
					className="company-items__docusign"
				/>
			</div>
			<div>
				<img
					src={maze}
					alt="Maze"
					className="company-items__maze"
				/>
			</div>
			<div>
				<img
					src={uber}
					alt="Uber"
					className="company-items__uber"
				/>
			</div>
			<div>
				<img
					src={miro}
					alt="Miro"
					className="company-items__miro"
				/>
			</div>
			<div>
				<img
					src={discord}
					alt="Discord"
					className="company-items__discord"
				/>
			</div>
			<div className="middle-section">
				<div>
					<img
						src={whyUs}
						alt="Snowboarder"
						className="middle-section__image"
					/>
				</div>
				<div className="middle-section__title-text">
					<div>
						<h1 className="middle-section__title">
							{" "}
							Why choose US{" "}
						</h1>
					</div>
					<div>
						<h2 className="middle-section__text">
							{" "}
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.{" "}
						</h2>
					</div>
				</div>{" "}
				<NavLink
					className="middle-section__link"
					to={"/read more"}
				>
					<p>Read more</p>
				</NavLink>
				<div className="bottom-section__title-text">
					<div>
						<h1 className="bottom-section__title">
							Service Repair
						</h1>
					</div>
					<div>
						<h2 className="bottom-section__text">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.
						</h2>
					</div>
				</div>
				<div className="bottom-section__title-text">
					<div>
						<h1 className="bottom-section__title">
							Board Accessories
						</h1>
					</div>
					<div>
						<h2 className="bottom-section__text">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.
						</h2>
					</div>
				</div>
				<div className="bottom-section__title-text">
					<div>
						<h1 className="bottom-section__title">
							Warranty & Guarantee
						</h1>
					</div>
					<div>
						<h2 className="bottom-section__text">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia
							consequat duis enim velit mollit.
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};
