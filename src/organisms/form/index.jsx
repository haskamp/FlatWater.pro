import React from "react";
import Button from "@mui/material/Button";
import useStore from "/src/ions/store/index.jsx";
import formTemplateCheckbox from "/src/ions/templates/form/index.js";
import FormBasic from "/src/organisms/form-basic/index.jsx";
import FormLesson from "/src/organisms/form-lesson/index.jsx";
import FormAbout from "/src/organisms/form-about/index.jsx";
import AlertSubmit from "/src/molecules/alert-submit/index.jsx";
import axios from "axios";
import ImageUpload from "/src/molecules/form-image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Form = () => {
	const setSubmitStatus = useStore(state => state.setSubmitStatus);
	const preset = "capstone"; // process.env.CLOUDINARY_PRESET;
	const url = "https://api.cloudinary.com/v1_1/cluster0/image/upload"; // process.env.CLOUDINARY_CLOUD;
	const { data: session } = useSession();
	const router = useRouter();

	const handleSubmit = async event => {
		event.preventDefault();
		// Textfields
		const formData = new FormData(event.target);
		const formText = Object.fromEntries(formData);
		// Checkboxes
		const groups = formTemplateCheckbox.groups.map(group => group.id);
		const formBoxes = {};
		groups.forEach(group => {
			formBoxes[group] = formData.getAll(group); // gets all "values" of Form by "id"
		});
		// Images
		const files = Array.from(event.target.image.files);
		// wait until all promises are resolved (when all images have been uploaded)
		const formResponses = await Promise.all(
			// returns an array of promises
			files.map(file => {
				// creating formdata
				const imageFormData = new FormData();
				// append file and preset to formdata
				imageFormData.append("file", file);
				imageFormData.append("upload_preset", preset);
				// send formdata to endpoint
				return axios.post(url, imageFormData);
			})
		);
		// create new array containing only urls
		const formImages = formResponses.map(response => {
			return response.data.url;
		});
		// Combine all inputs to object and upload to MongoDB
		const combinedFormValues = {
			...formText,
			...formBoxes,
			images: formImages,
			user: session.user.id,
		};

		await axios.post("/api/instructors", combinedFormValues);
		// set Status and then call alert
		setSubmitStatus(true);
		setTimeout(() => {
			router.push("/profile");
		}, 12000);
	};

	return (
		<form encType="multipart/form-data" onSubmit={event => handleSubmit(event)}>
			<FormBasic />
			<ImageUpload />
			<FormLesson />
			<FormAbout />
			<Button type="submit" variant="contained">
				Submit
			</Button>
			<AlertSubmit />
		</form>
	);
};

export default Form;
