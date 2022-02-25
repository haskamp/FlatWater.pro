import {
	mapAPI,
	markerIcon,
	markerUserIcon,
	satMapAPI,
	tourMapAPI,
} from "/src/ions/templates/map/index.js";
import { locations } from "/src/ions/templates/form/index.js";
import LocateUser from "/src/molecules/map-locateuser";
import styled from "@emotion/styled";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { LayersControl, MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";

const StyledMapContainer = styled(MapContainer)`
	position: relative;
	width: 100%;
	height: calc(100vh - 56px);
	margin: 0;
	padding: 0;
`;
const { BaseLayer } = LayersControl;

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
		<StyledMapContainer
			scrollWheelZoom={false}
			zoomControl={false}
			center={userLocation}
			zoom={[6]}
			attributionControl={false}
		>
			<LayersControl position="bottomleft">
				<BaseLayer checked name="FlatWater">
					<TileLayer url={mapAPI} />
				</BaseLayer>
				<BaseLayer name="World">
					<TileLayer url={satMapAPI} />
				</BaseLayer>
				<BaseLayer name="Touristic">
					<TileLayer url={tourMapAPI} />
				</BaseLayer>
			</LayersControl>
			<LocateUser />
			<ZoomControl position="bottomright" />
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
		</StyledMapContainer>
	);
};

export default Map;
