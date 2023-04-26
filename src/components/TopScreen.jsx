import home from "images/upper-main.png";
import line from "images/icons/lineRed.svg";
//import line from "images/icons/line.svg";

export const TopScreen = () => {
	return (
		<div>
			<div className="top-screen">
				<img
					className="top-screen__main"
					src={home}
					alt="home"
				/>
				<img
					className="top-screen__line"
					src={line}
					alt="line"
				/>
				<div className="top-screen__text-and-button-container">
					<h1 className="top-screen__skyski">SKY & SKI </h1>

					<h2 className="top-screen__webuild">
						We build only the best, customized to your
						exacting demands
					</h2>

					<button className="top-screen__button">
						SHOP NOW
					</button>
				</div>
			</div>
		</div>
	);
};
