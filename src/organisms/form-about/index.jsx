import { Stack, TextField } from "@mui/material";
import React from "react";

const FormAbout = () => {
	return (
		<Stack maxWidth="350px">
			<TextField
				required
				multiline
				rows="1"
				variant="outlined"
				label="Your slogan"
				name="slogan"
				placeholder="Everyone can surf!"
				helperText="Enter your personal motto"
			/>
			<TextField
				required
				multiline
				rows="4"
				variant="outlined"
				label="About you"
				name="aboutyou"
				placeholder="I love to surf and to teach - so I teach with passion."
				helperText="Tell your future student your way to teach."
			/>
		</Stack>
	);
};
export default FormAbout;
