import { OurUniqueFeatures } from "components/OurUniqueFeatures";
import { TopScreen } from "components/layout/TopScreen";
import { Catalog } from "components/Catalog";
import { Gallery } from "components/layout/Gallery";
import { WhyChooseUs } from "components/layout/WhyChooseUs";
import { VideoAboutUs } from "components/layout/VideoAboutUs";
import { MapSection } from "components/layout/MapSection";

export const Home = () => {
	return (
		<>
			<div className="header-top-screen-container">
				<TopScreen />
			</div>
			<div className="our-unique-features">
				<OurUniqueFeatures />
			</div>
			<div className="wrapper">
				{/* not sure if i should use h1, h2, or h3 here */}
				<div className="wrapper" id="catalog">
					<Catalog />
				</div>
			</div>
			<div className="gallery">
				<Gallery />
			</div>
			<div className="why-choose-us-container">
				<WhyChooseUs />
			</div>
			<div className="wrapper">
				<VideoAboutUs />
			</div>
			<div className="wrapper-mobile-full-screen">
				<MapSection />
			</div>
		</>
	);
};
