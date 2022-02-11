import { useMapEvents } from "react-leaflet";

const LocateUser = () => {
	const map = useMapEvents({
		click: () => {
			map.locate();
		},
		locationfound: e => {
			map.flyTo(e.latlng, [7]);
		},
	});
	return null;
};

export default LocateUser;
