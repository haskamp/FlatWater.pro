import L from "leaflet";

export const mapAPI =
	"https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFza2FtcCIsImEiOiJja3pnMHpjYXEwemU5MndwZHJjemNia3hpIn0.bgcdYGKLLnVIH5y5GnUf3w";
export const locations = [
	{ label: "Fehmarn", coords: [54.4378, 11.19352] },
	{ label: "Rügen", coords: [54.416665, 13.3999984] },
	{ label: "Sankt-Peter-Ording", coords: [54.304167, 8.651111] },
];
export const markerUserIcon = L.divIcon({
	html: `
				<svg
				  width="24"
				  height="24"
				  viewBox="0 0 24 24"
				>
				  <path fill="#35B2DA"
					d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
				  	>
				  </path>
				</svg>`,
	className: "",
	iconSize: [24, 24],
	iconAnchor: [12, 0],
});

export const markerIcon = L.divIcon({
	html: `
				<svg
				  width="24"
				  height="24"
				  viewBox="0 0 24 24"
				>
				  <path fill="#35B2DA"
				  	d="M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.14 15.86 2 12 2M12 4C13.1 4 14 4.9 14 6C14 7.11 13.1 8 12 8S10 7.11 10 6C10 4.9 10.9 4 12 4M12 14C10.33 14 8.86 13.15 8 11.85C8 10.53 10.67 9.8 12 9.8S16 10.53 16 11.85C15.14 13.15 13.67 14 12 14Z"
				  	>
				  </path>
				</svg>`,
	className: "",
	iconSize: [24, 24],
	iconAnchor: [12, 0],
});
