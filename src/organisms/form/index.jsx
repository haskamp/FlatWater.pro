import React from "react";
import { Button } from "@mui/material";
import useStore from "/src/ions/store/index.jsx";
import formTemplateCheckbox from "/src/ions/templates/form/index.js";
import FormBasic from "/src/organisms/form-basic/index.jsx";
import FormLesson from "/src/organisms/form-lesson/index.jsx";
import FormAbout from "/src/organisms/form-about/index.jsx";
import AlertSubmit from "/src/molecules/alert-submit/index.jsx";
import axios from "axios";
import ImageUpload from "/src/molecules/form-image";

const Form = () => {
	const setCard = useStore(state => state.setCard);
	const setSubmitStatus = useStore(state => state.setSubmitStatus);

	const handleSubmit = async ev => {
		ev.preventDefault();

		const formData = new FormData(ev.target);
		const formValues = Object.fromEntries(formData);
		const groups = formTemplateCheckbox.groups.map(group => group.id);
		const formControls = {};
		groups.forEach(group => {
			formControls[group] = formData.getAll(group); // gets all "values" of Form by "id"
		});

		const combinedFormValues = { ...formValues, ...formControls };
		setCard(combinedFormValues);

		axios.post("/api/instructors", combinedFormValues).then(response => {
			console.log("text: axios.post", response);
		});
		setSubmitStatus(true);
	};

	return (
		<div>
			<form onSubmit={ev => handleSubmit(ev)}>
				<FormBasic />
				<ImageUpload />
				<FormLesson />
				<FormAbout />
				<Button type="submit" variant="contained">
					Submit
				</Button>
				<AlertSubmit />
			</form>
		</div>
	);
};

export default Form;
// noValidate
