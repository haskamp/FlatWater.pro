import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { mapAPI, markerIcon, markerUserIcon, locations } from "/src/ions/templates/map/index.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocateUser from "/src/molecules/map-locateuser";

const Map = () => {
	const [userLocation, setUserLocation] = useState([54.57532, 10.01534]);
	useEffect(() => {
		const success = position => {
			setUserLocation([position.coords.latitude, position.coords.longitude]);
		};
		const error = err => {
			alert(`ERROR(${err.code}): ${err.message}`);
		};
		navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });
	}, [userLocation]);

	return (
		<div>
			<MapContainer scrollWheelZoom center={userLocation} zoom={[3]}>
				<TileLayer url={mapAPI} attribution="Pixelass&MarCO@neuefische+MarcKlein" />
				<LocateUser />
				<Marker animate position={userLocation} icon={markerUserIcon}>
					<Popup>You are here</Popup>
				</Marker>
				{locations.map(location => {
					return (
						<Marker key={location.label} position={location.coords} icon={markerIcon}>
							<Popup>{location.label}</Popup>
						</Marker>
					);
				})}
			</MapContainer>
		</div>
	);
};

export default Map;
