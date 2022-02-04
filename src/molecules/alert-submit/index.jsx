import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";

const AlertSubmit = ({ isSubmitted, setSubmit }) => {
	return (
		<Snackbar open={isSubmitted} autoHideDuration={7000} onClose={() => setSubmit(false)}>
			<Alert
				severity="success"
				variant="filled"
				onClose={() => {
					setSubmit(false);
				}}
			>
				<AlertTitle>Submitted</AlertTitle>
				Success — Your data is saved!
			</Alert>
		</Snackbar>
	);
};

export default AlertSubmit;
