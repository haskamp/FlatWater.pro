import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";
import useStore from "/src/ions/store/index.jsx";

const AlertSubmit = () => {
	const setSubmitStatus = useStore(state => state.setSubmitStatus);
	const submitStatus = useStore(state => state.submitStatus);
	return (
		<Snackbar
			open={submitStatus}
			autoHideDuration={7000}
			onClose={() => setSubmitStatus(false)}
		>
			<Alert
				severity="success"
				variant="filled"
				onClose={() => {
					setSubmitStatus(false);
				}}
			>
				<AlertTitle>Submitted</AlertTitle>
				Success — Your data is saved!
			</Alert>
		</Snackbar>
	);
};

export default AlertSubmit;
