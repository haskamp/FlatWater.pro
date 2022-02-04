import { Button, CardActions, IconButton, Tooltip, Typography } from "@mui/material";
import { ExpandMore, Message } from "@mui/icons-material";
import React from "react";
import useStore from "../../ions/store";

const CardFooter = ({ index, state }) => {
	const expandCard = useStore(state => state.expandCard);

	return (
		<CardActions>
			<Tooltip title="Expand">
				<IconButton
					aria-expanded={state}
					aria-label="show more"
					onClick={() => {
						expandCard(index);
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
