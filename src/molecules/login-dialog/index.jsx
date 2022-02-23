import {
	Avatar,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
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
			<DialogTitle>
				<Typography variant="button">How do want to log in?</Typography>
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
							<Avatar>
								{(authOption === "github" && <GitHub />) ||
									(authOption === "google" && <Google />)}
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={
								<Typography variant="button">{authOption.toUpperCase()}</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
		</Dialog>
	);
};

export default LoginDialog;
