import React, { useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

export const Contact = () => {
	const position = { lat: 35.99576, lng: -78.90214 };
	const containerStyle = { width: "100%", height: "50rem" };

	const [infoWindowOpen, setInfoWindowOpen] =
		useState(false);

	const toggleInfoWindow = () => {
		setInfoWindowOpen(!infoWindowOpen);
	};

	return (
		<div className="map-section">
			<div className="map-section__content">
				<div className="map-section__contact-info">
					<h2 className="map-section__contact-title">
						Contact Us
					</h2>
					<h3 className="map-section__adress">
						Headquarters:
						<br /> 201 W Main St STE 100, Durham, NC 27701{" "}
						<br /> +1 314-999-9999
					</h3>
				</div>
				<LoadScript
					googleMapsApiKey={
						process.env.REACT_APP_GOOGLE_MAPS_API_KEY
					}
				>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={position}
						zoom={15}
					>
						<Marker
							position={position}
							onClick={toggleInfoWindow}
						>
							{infoWindowOpen && (
								<InfoWindow
									onCloseClick={toggleInfoWindow}
								></InfoWindow>
							)}
						</Marker>
					</GoogleMap>
				</LoadScript>

				<div className="map-section__info">
					<h2 className="map-section__title">
						Location of our Hotelos
					</h2>
					<h3 className="map-section__text">
						Lorem Ipsum is simply dummy text of the printing
						and typesetting industry. Lorem Ipsum has been
						the industry's
					</h3>
				</div>
			</div>
		</div>
	);
};
