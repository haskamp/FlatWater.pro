import { Checkbox } from "@mui/material";

export const locations = [
	{ label: "Fehmarn", coords: [54.4378, 11.19352] },
	{ label: "Heiligenhafen", coords: [54.3717445, 10.9809235] },
	{ label: "Pelzerhaken", coords: [54.0905313, 10.859508] },
	{ label: "Salzhaff", coords: [54.0378581, 11.595496] },
	{ label: "Rügen", coords: [54.416665, 13.3999984] },
	{ label: "Sankt-Peter-Ording", coords: [54.304167, 8.651111] },
	{ label: "Laboe", coords: [54.401749, 10.22666] },
	/*	{ label: "Cuxhafen", coords: [53.86163, 8.62514] },
	{ label: "Neuharlingersiel", coords: [53.69965, 7.70283] },
	{ label: "Saaler Bodden", coords: [54.32285, 12.481398] },
	{ label: "Sylt", coords: [54.9017773, 8.331346] },*/
];
export const license = [{ label: "IKO" }, { label: "VDWS" }, { label: "VDS" }];

const formTemplateCheckbox = {
	groups: [
		{
			id: "availabilities",
			legend: "Your availabilities",
			helperText: "When are you free to teach?",
			fields: [
				{ id: "mon", value: "mon", type: "checkbox", label: "Mon" },
				{ id: "tue", value: "tue", type: "checkbox", label: "Tue" },
				{ id: "wed", value: "wed", type: "checkbox", label: "Wed" },
				{ id: "thu", value: "thu", type: "checkbox", label: "Thu" },
				{ id: "fri", value: "fri", type: "checkbox", label: "Fri" },
				{ id: "sat", value: "sat", type: "checkbox", label: "Sat" },
				{ id: "sun", value: "sun", type: "checkbox", label: "Sun" },
			],
		},
		{
			id: "languages",
			legend: "Your Languages",
			helperText: "In which languages do you teach?",
			fields: [
				{ id: "ger", value: "ger", type: "checkbox", label: "German" },
				{ id: "eng", value: "eng", type: "checkbox", label: "English" },
				{ id: "esp", value: "esp", type: "checkbox", label: "Spanish" },
			],
		},
		{
			id: "services",
			legend: "Additional services",
			helperText: "What other service can you provide?",
			fields: [
				{ id: "gear", value: "gear", type: "checkbox", label: "Kite gear for student" },
				{ id: "wetsuit", value: "wetsuit", type: "checkbox", label: "Wetsuit rental" },
				{ id: "ride", value: "ride", type: "checkbox", label: "Pick up & Ride to spot" },
			],
		},
	],
	type: { checkbox: Checkbox },
};

export default formTemplateCheckbox;
