import React from "react";
import { MapSection } from "components/layout/MapSection";

export class Contact extends React.Component {
	render() {
		return (
			<div className="map-section">
				<div className="map-section__contact-info">
					<h2 className="map-section__contact-title">
						Contact Us
					</h2>
					<h3 className="map-section__adress">
						Headquarters:
						<br /> 201 W Main St STE 100, Durham, NC 27701
						<br /> +1 314-999-9999
					</h3>
					<MapSection />
				</div>
			</div>
		);
	}
}


