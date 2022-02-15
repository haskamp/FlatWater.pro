import { Button, CardActions, IconButton, Tooltip, Typography } from "@mui/material";
import { ExpandMore, Message } from "@mui/icons-material";
import React from "react";
import useStore from "/src/ions/store/index.jsx";

const CardFooter = () => {
	const setIsExpanded = useStore(state => state.setIsExpanded);

	return (
		<CardActions>
			<Tooltip title="Expand">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setIsExpanded();
					}}
				>
					<ExpandMore />
				</IconButton>
			</Tooltip>
			<Typography variant="button">50€ per hour</Typography>
			<Button variant="contained" startIcon={<Message />}>
				Contact
			</Button>
		</CardActions>
	);
};
export default CardFooter;
