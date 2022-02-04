import { Checkbox } from "@mui/material";

export const locations = [
	{ label: "Fehmarn" },
	{ label: "Rügen" },
	{ label: "Sankt-Peter-Ording" },
];
export const license = [{ label: "IKO" }, { label: "VDWS" }, { label: "VDS" }];

const formTemplateCheckbox = {
	groups: [
		{
			id: "availabilities",
			legend: "Your availabilities",
			helperText: "When are free to teach?",
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
