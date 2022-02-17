import { Button } from "@mui/material";
import React from "react";
import axios from "axios";

const Uploader = () => {
	const handleSubmit = event => {
		event.preventDefault();

		const file = event.target.image.files[0];
		console.log(file);

		const preset = "capstone";

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", preset);

		console.log(formData);
		axios
			.post("https://api.cloudinary.com/v1_1/cluster0/image/upload", formData)
			.then(response => console.log(response));
	};

	return (
		<form encType="multipart/form-data" onSubmit={event => handleSubmit(event)}>
			<label>
				<input
					multiple
					style={{ display: "none" }}
					type="file"
					accept="image/*"
					name="image"
				/>
				<Button variant="contained" component="span">
					Choose image
				</Button>
			</label>
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default Uploader;
