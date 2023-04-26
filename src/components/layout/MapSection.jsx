import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
} from "react-leaflet";

export const MapSection = () => {
	const position = [51.505, -0.09]; // Coordinates

	return (
		<div className="map-section">
			<MapContainer
				center={position}
				zoom={13}
				style={{ height: "400px", width: "100%" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						<h3>Location our Hotelos</h3>
						<p>
							Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum
							has been the industry's
						</p>
					</Popup>
				</Marker>
			</MapContainer>
			<div className="map-section-info">
				<div className="map-section-text">
					<h3>Location our Hotelos</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing
						and typesetting industry. Lorem Ipsum has been
						the industry's
					</p>
				</div>
				<div className="map-section-contact">
					<input type="email" placeholder="Email" />
					<button>Contact</button>
				</div>
			</div>
		</div>
	);
};
