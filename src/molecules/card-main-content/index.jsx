import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { LocationOn, Verified } from "@mui/icons-material";
import React from "react";

const CardMainContent = ({ input }) => {
	return (
		<CardActionArea style={{ position: "relative" }}>
			<CardMedia component="img" image={input.image} alt={`Kite-Instructor ${input.name}`} />
			<CardContent>
				<Typography variant="h4">{input.name}</Typography>
				<Typography variant="h6">
					<LocationOn />
					{input.location}
				</Typography>
				<Typography variant="h6">
					<Verified />
					{input.license}
				</Typography>
			</CardContent>
		</CardActionArea>
	);
};

export default CardMainContent;
