import { InputAdornment, Stack, TextField } from "@mui/material";
import { Email, Event, Person } from "@mui/icons-material";
import React from "react";

const FormBasic = () => {
	return (
		<Stack maxWidth="350px">
			<TextField
				/*required*/
				variant="outlined"
				label="Name"
				name="name"
				placeholder="Maxi Musterfrau"
				margin="normal"
				InputProps={{
					startAdornment: (
						<InputAdornment position="end">
							<Person />
						</InputAdornment>
					),
				}}
			/>
			<TextField
				/*required*/
				type="date"
				variant="outlined"
				label="Date of birth"
				margin="normal"
				name="date"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Event />
						</InputAdornment>
					),
				}}
			/>
			<TextField
				/*required*/
				type="email"
				variant="outlined"
				label="Email"
				name="email"
				margin="normal"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Email />
						</InputAdornment>
					),
				}}
			/>
		</Stack>
	);
};

export default FormBasic;

/*

<TextField
	/!*required*!/
	type="url"
	variant="outlined"
	label="Profile picture"
	name="imageurl"
	margin="normal"
	InputProps={{
		startAdornment: (
			<InputAdornment position="start">
				<PhotoCamera />
			</InputAdornment>
		),
	}}
/>*/
