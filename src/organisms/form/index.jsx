import React from "react";
import { Button } from "@mui/material";
import useStore from "../../ions/store";

import formTemplateCheckbox from "../../ions/templates/form";
import FormBasic from "../form-basic";
import FormLesson from "../form-lesson";
import FormAbout from "../form-about";
import useLog from "../../ions/hooks/useLog";
import AlertSubmit from "../../molecules/alert-submit";

const Form = () => {
	const cards = useStore(state => state.cards);
	const setCard = useStore(state => state.setCard);
	const setSubmitStatus = useStore(state => state.setSubmitStatus);

	const handleSubmit = ev => {
		ev.preventDefault();

		const formData = new FormData(ev.target);
		const formValues = Object.fromEntries(formData);

		const groups = formTemplateCheckbox.groups.map(group => group.id);
		const formControls = {};
		groups.forEach(group => {
			formControls[group] = formData.getAll(group); // gets all "values" of Form by "id"
		});

		const extendedFormValues = { ...formValues, ...formControls };

		setCard(extendedFormValues);
		setSubmitStatus(true);
	};

	useLog("cards", cards);
	return (
		<div>
			<form noValidate encType="multipart/form-data" onSubmit={ev => handleSubmit(ev)}>
				<FormBasic />
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
