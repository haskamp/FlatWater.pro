import { InputAdornment, Stack, TextField } from "@mui/material";
import { Email, Event, Person } from "@mui/icons-material";
import React from "react";
import PhotoUpload from "../photo-upload";

const FormBasic = () => {
	return (
		<Stack maxWidth="350px">
			<TextField
				required
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
				required
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
				required
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
			<PhotoUpload />
		</Stack>
	);
};

export default FormBasic;
