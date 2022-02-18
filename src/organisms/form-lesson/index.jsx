import {
	Autocomplete,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	Stack,
	TextField,
} from "@mui/material";
import formTemplateCheckbox, { license, locations } from "/src/ions/templates/form/index.js";
import React, { useState } from "react";

const FormKite = () => {
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

	return (
		<Stack maxWidth="350px">
			<Autocomplete
				options={locations}
				renderInput={params => (
					<TextField
						{...params}
						/*required*/
						variant="outlined"
						label="Location"
						name="location"
						margin="normal"
						placeholder="Sankt-Peter-Böhl"
					/>
				)}
			/>
			<Autocomplete
				options={license}
				renderInput={params => (
					<TextField
						{...params}
						/*required*/
						variant="outlined"
						label="Instructor license"
						name="license"
						margin="normal"
						placeholder="IKO"
					/>
				)}
			/>
			{formTemplateCheckbox.groups.map(group => (
				<FormGroup key={group.id} onChange={event => handlers[group.id](event)}>
					<FormLabel component="legend">{group.legend}</FormLabel>
					{group.fields.map(field => {
						const Control = formTemplateCheckbox.type[field.type];
						return (
							<FormControlLabel
								key={field.id}
								checked={field.id[field.value]}
								value={field.value}
								name={group.id}
								control={<Control />}
								label={field.label}
							/>
						);
					})}
					<FormHelperText>{group.helperText}</FormHelperText>
				</FormGroup>
			))}
		</Stack>
	);
};
export default FormKite;
