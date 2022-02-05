import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { LocationOn, Verified } from "@mui/icons-material";
import React from "react";

const CardMainContent = ({ card }) => {
	return (
		<CardActionArea style={{ position: "relative" }}>
			<CardMedia component="img" image={card.image} alt={`Kite-Instructor ${card.name}`} />
			<CardContent>
				<Typography variant="h4">{card.name}</Typography>
				<Typography variant="h6">
					<LocationOn />
					{card.location}
				</Typography>
				<Typography variant="h6">
					<Verified />
					{card.license}
				</Typography>
			</CardContent>
		</CardActionArea>
	);
};

export default CardMainContent;
