import { Button, CardActions, IconButton, Tooltip, Typography } from "@mui/material";
import { ExpandMore, Message } from "@mui/icons-material";
import React from "react";
import useStore from "../../ions/store";

const CardFooter = ({ index }) => {
	const setExpanded = useStore(state => state.setExpanded);
	const cards = useStore(state => state.cards);

	return (
		<CardActions>
			<Tooltip title="Expand">
				<IconButton
					aria-expanded={cards[index].isExpanded}
					aria-label="show more"
					onClick={() => {
						setExpanded(index);
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
