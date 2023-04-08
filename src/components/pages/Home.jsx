import { OurUniqueFeatures } from "../OurUniqueFeatures";
import { TopScreen } from "../TopScreen";
import { Catalog } from "components/Catalog";


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
		</>
	);
};
