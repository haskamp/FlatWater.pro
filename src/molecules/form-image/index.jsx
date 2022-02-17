import { Box, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";

const ImageUpload = () => {
	const [state, setState] = useState("");
	const handleSubmit = ev => {
		ev.preventDefault();
		const url = "https://api.cloudinary.com/v1_1/cluster0/upload";

		const formData = new FormData();
		const imageInput = Array.from(ev.target.elements).find(({ name }) => name === "image");

		console.log("evtarget", ev.target.elements);
		console.log("formdata", formData);
		console.log("fotodata", imageInput.files);
		console.log("array", Array.from(imageInput.files));

		formData.append("file", imageInput[0]);
		/*	Array.from(imageInput.files).forEach((image, index) => {
			formData.append("file", image[index]); // akzeptiert nur strings, brauchen wir die iteration mit dem index
			console.log("foto", image);
		});*/
		formData.append("upload_preset", "wni5w8hg");
		/*for (const image of imageInput.files) {
			formData.append("file", image);
			console.log("foto", image);
		}*/

		const data = axios
			.post(url, formData, {
				headers: {
					"Content-type": "multipart/form-data",
				},
			})
			.then(response => {
				console.log(response);
				setState(response.data.url);
			})
			.catch(err => console.error(err));

		console.log("formtdata2", formData);
		console.log("data", data);
		/*		await axios
			.post(, formData)
			.then(response => {
				console.log("imgupload", response);
			});*/
	};

	return (
		<Box>
			<form encType="multipart/form-data" onSubmit={ev => handleSubmit(ev)}>
				<label>
					<input
						multiple
						style={{ display: "none" }}
						type="file"
						accept="image/*"
						name="image"
						/*onChange={ev => handleCapture(ev)}*/
					/>
					<Button variant="contained" component="span">
						Choose image
					</Button>
				</label>
				<label>
					<input
						type="file"
						capture="user"
						style={{ display: "none" }}
						accept="image/*"
						name="imageCapture"
					/>
					<IconButton aria-label="Take picture">
						<PhotoCamera />
					</IconButton>
				</label>
				<Button type="submit">Submit </Button>
			</form>
		</Box>
	);
};

export default ImageUpload;
