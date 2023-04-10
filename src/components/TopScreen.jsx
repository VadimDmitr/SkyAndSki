import home from "images/upper-main.png";
//import skyski from "images/skyski.svg";
//import build from "images/webuild.svg";
import line from "images/icons/line.svg";

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
        <p className="top-screen__skyski">SKY & SKI </p>

        <p className="top-screen__webuild">We build only the best, customized to your exacting demands</p>
		
        <button className="top-screen__button">
          SHOP NOW
        </button>
				{/*<img
					className="top-screen__skyski"
					src={skyski}
					alt="sky&ski"
				/>
				<img
					className="top-screen__webuild"
					src={build}
					alt="We build only the best"
  />*/}
			</div>
		</div>
	);
};
