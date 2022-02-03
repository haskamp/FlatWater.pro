import React, { useEffect, useState } from "react";
import useLog from "../../ions/hooks/useLog";
import {
	Button,
	IconButton,
	Checkbox,
	FormControlLabel,
	FormGroup,
	FormLabel,
	InputAdornment,
	Stack,
	TextField,
	Box,
	Autocomplete,
	FormHelperText,
} from "@mui/material";
import { Email, Person, Event, PhotoCamera, PersonPinCircle, Badge } from "@mui/icons-material";

const locations = [
	{ label: "Fehmarn", id: 1 },
	{ label: "Rügen", id: 2 },
	{ label: "Sankt-Peter-Ording", id: 3 },
];
const licence = [
	{ label: "IKO", id: 1 },
	{ label: "VDWS", id: 2 },
	{ label: "VDS", id: 3 },
];

const form = {
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

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [availabilities, setAvailabilities] = useState({
		mon: false,
		tue: false,
		wed: false,
		thu: false,
		fri: false,
		sat: false,
		sun: false,
	});
	const [languages, setLanguage] = useState({
		ger: true,
		eng: false,
		esp: false,
	});
	const [services, setServices] = useState({
		gear: false,
		wetsuit: false,
		ride: false,
	});

	const handleSubmit = ev => {
		ev.preventDefault();
	};

	const handleLanguages = event => {
		setLanguage({
			...languages,
			[event.target.value]: event.target.checked,
		});
	};
	const handleServices = event => {
		setServices({
			...services,
			[event.target.value]: event.target.checked,
		});
	};
	const handleAvailabilities = event => {
		setAvailabilities({
			...availabilities,
			[event.target.value]: event.target.checked,
		});
	};

	const handlers = {
		availabilities: handleAvailabilities,
		languages: handleLanguages,
		services: handleServices,
	};

	useLog("availabilities", availabilities);
	useLog("languages", languages);
	useLog("services", services);

	return (
		<div>
			<form noValidate onSubmit={handleSubmit}>
				<Stack maxWidth="350px">
					<TextField
						required
						variant="outlined"
						label="Name"
						//placeholder="Maxi Musterfrau"
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
						margin="normal"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Email />
								</InputAdornment>
							),
						}}
					/>
					<Box>
						<label>
							<input
								multiple
								style={{ display: "none" }}
								type="file"
								accept="image/*"
								name="instructorPhoto"
							/>
							<Button variant="contained" component="span">
								Choose photo
							</Button>
						</label>
						<label>
							<input
								type="file"
								style={{ display: "none" }}
								accept="image/*"
								capture="user"
							/>
							<IconButton aria-label="Take picture">
								<PhotoCamera />
							</IconButton>
						</label>
					</Box>
				</Stack>

				<Autocomplete
					options={locations}
					renderInput={params => (
						<TextField
							{...params}
							required
							margin="normal"
							variant="outlined"
							label="Location"
							placeholder="Sankt-Peter-Böhl"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<PersonPinCircle />
									</InputAdornment>
								),
							}}
						/>
					)}
				/>
				<Autocomplete
					options={licence}
					renderInput={params => (
						<TextField
							{...params}
							required
							margin="normal"
							variant="outlined"
							label="Instructor license"
							placeholder="IKO"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Badge />
									</InputAdornment>
								),
							}}
						/>
					)}
				/>
				{form.groups.map(group => (
					<FormGroup key={group.id} onChange={event => handlers[group.id](event)}>
						<FormLabel component="legend">{group.legend}</FormLabel>
						{group.fields.map(field => {
							const Control = form.type[field.type];
							return (
								<FormControlLabel
									key={field.id}
									checked={field.id[field.value]}
									value={field.value}
									control={<Control />}
									label={field.label}
								/>
							);
						})}
						<FormHelperText>{group.helperText}</FormHelperText>
					</FormGroup>
				))}

				<TextField
					required
					multiline
					rows="1"
					variant="outlined"
					label="Your slogan"
					placeholder="Everyone can surf!"
					helperText="Enter your personal motto"
				/>
				<TextField
					required
					multiline
					rows="4"
					variant="outlined"
					label="About you "
					placeholder="I love to surf and to teach - so I teach with passion."
					helperText="Tell your future student your way to teach."
				/>
				<Button type="submit" variant="contained">
					Next
				</Button>
			</form>
		</div>
	);
};

export default Form;