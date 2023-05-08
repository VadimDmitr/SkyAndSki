import { MapSection } from "components/layout/MapSection";

export const Contact = () => {
	return (
		<div className="wrapper">
			<div className="contact">
				<h2 className="contact__contact-title">
					Contact Us
				</h2>
				<h3 className="contact__address">
					Headquarters:
					<br /> 201 W Main St STE 100, Durham, NC 27701
					<br /> +1 314-999-9999
				</h3>
				<MapSection />
				{/* <div className="contact__contact-info">
				</div> */}
			</div>
		</div>
	);
};
