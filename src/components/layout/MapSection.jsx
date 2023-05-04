import React, { useState } from "react";
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

export const MapSection = () => {
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
								<InfoWindow onCloseClick={toggleInfoWindow}>
									{/* <div>
										<h3>Location of our Hotelos</h3>
										<p>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting industry.
											Lorem Ipsum has been the industry's
										</p>
									</div> */}
								</InfoWindow>
							)}
						</Marker>
					</GoogleMap>
				</LoadScript>
				<div className="map-section__info">
					<div>
						<h2 className="map-section__title">
							Location of our Hotelos
						</h2>
						<h3 className="map-section__text">
							Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum
							has been the industry's
						</h3>
					</div>
					{/* <div className="map-section-contact">
						<input type="email" placeholder="Email" />
						<button>Contact</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};
