import { GitHub, Google } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { signIn } from "next-auth/react";
import React from "react";

const authOptions = ["google", "github"];

const LoginDialog = props => {
	const { open, setOpen } = props;

	return (
		<Dialog
			open={open}
			onClose={() => {
				setOpen(false);
			}}
		>
			<DialogTitle>
				<Typography variant="h6">Choose LogIn:</Typography>
			</DialogTitle>
			<List sx={{ pt: 0 }}>
				{authOptions.map(authOption => (
					<ListItem
						key={authOption}
						button
						onClick={() => {
							signIn(authOption).then(setOpen(false));
						}}
					>
						<ListItemAvatar>
							<Avatar sx={{ background: "#d9698c", color: "white" }}>
								{(authOption === "github" && <GitHub />) ||
									(authOption === "google" && <Google />)}
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={
								<Typography variant="subtitle">
									{authOption.toUpperCase()}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
		</Dialog>
	);
};

export default LoginDialog;
