import { OurUniqueFeatures } from "../OurUniqueFeatures";
import { Catalog } from "../Catalog"; 


export const Home = () => {
	return (
		<>
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

