import { OurUniqueFeatures } from "components/OurUniqueFeatures";
import { TopScreen } from "components/TopScreen";
import { Catalog } from "components/Catalog";
import { Gallery } from "../layout/Gallery";
import { WhyChooseUs } from "../layout/WhyChooseUs";

export const Home = () => {
	return (
		<>
			<div className="top-screen">
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
			<div className="why-choose-us">
				<WhyChooseUs />
			</div>
		</>
	);
};
