import { CardContent, Collapse, Divider, Typography } from "@mui/material";
import React from "react";

// .join(" ")

const CardExtendedContext = (cards, card) => {
	return (
		<Collapse in={cards.isExpanded} timeout="auto">
			<Divider />
			<CardContent>
				<Typography variant="h6">Availabilities:</Typography>
				<Typography variant="body2">{card.availabilities}</Typography>
				<Typography variant="h6">Language:</Typography>
				<Typography variant="body2">{card.languages}</Typography>
				<Typography variant="h6">Services:</Typography>
				<Typography variant="body2">{card.services}</Typography>
				<Typography variant="h6">{card.slogan}</Typography>
				<Typography variant="body2">{card.aboutyou}</Typography>
			</CardContent>
		</Collapse>
	);
};

export default CardExtendedContext;
