import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { LocationOn, Verified } from "@mui/icons-material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CardMainContent = ({ input }) => {
	const images = [...input.images];
	return (
		<Card style={{ position: "relative" }}>
			<Carousel>
				{images.map(image => (
					<CardMedia
						key={input._id}
						component="img"
						src={image}
						alt={`Kite-Instructor ${input.name}`}
					/>
				))}
			</Carousel>
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
		</Card>
	);
};

export default CardMainContent;
