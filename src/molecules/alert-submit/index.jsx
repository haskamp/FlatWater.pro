import { Alert, AlertTitle, Snackbar, Button } from "@mui/material";
import React from "react";
import useStore from "/src/ions/store/index.jsx";
import { useRouter } from "next/router";

const AlertSubmit = () => {
	const setSubmitStatus = useStore(state => state.setSubmitStatus);
	const submitStatus = useStore(state => state.submitStatus);
	const router = useRouter();
	return (
		<Snackbar
			open={submitStatus}
			autoHideDuration={10000}
			onClose={() => setSubmitStatus(false)}
		>
			<Alert
				severity="success"
				variant="filled"
				action={
					<Button color="inherit" size="small" onClick={() => router.push("/profile")}>
						Go back to Profile
					</Button>
				}
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
