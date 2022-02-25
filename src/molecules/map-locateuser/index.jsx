import { useMapEvents } from "react-leaflet";

const LocateUser = () => {
	const map = useMapEvents({
		click: () => {
			map.locate();
		},
		locationfound: e => {
			map.flyTo(e.latlng, [9]);
		},
	});
	return null;
};

export default LocateUser;
