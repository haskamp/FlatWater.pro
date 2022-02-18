import {
	Avatar,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import React from "react";
import { GitHub, Google } from "@mui/icons-material";
import { signIn } from "next-auth/react";
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
			<DialogTitle>Choose your login</DialogTitle>
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
							<Avatar>
								{(authOption === "github" && <GitHub />) ||
									(authOption === "google" && <Google />)}
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={`Log in with ${authOption.toUpperCase()}`} />
					</ListItem>
				))}
			</List>
		</Dialog>
	);
};

export default LoginDialog;
