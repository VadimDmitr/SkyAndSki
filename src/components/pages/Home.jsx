import { OurUniqueFeatures } from "components/OurUniqueFeatures";
import { TopScreen } from "components/TopScreen";
import { Catalog } from "components/Catalog";
import { Gallery } from "../layout/Gallery";
import { WhyChooseUs } from "../layout/WhyChooseUs";
import { Header } from "components/layout/header/Header";

export const Home = () => {
	return (
		<>
			<div className="header-top-screen-container">
				<Header />
				<TopScreen />
			</div>
			<div className="our-unique-features">
				<OurUniqueFeatures />
			</div>
			<div className="wrapper">
				{/* not sure if i should use h1, h2, or h3 here */}
				<Catalog />
			</div>
			<div className="gallery">
				<Gallery />
			</div>
			<div className="why-choose-us-container">
				<WhyChooseUs />
			</div>
		</>
	);
};
