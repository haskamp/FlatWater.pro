import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/router";

const CardInstructor = ({ instructor }) => {
	const router = useRouter();
	const images = [...instructor.images];

	return (
		<Card>
			<CardActionArea
				onClick={() => {
					router.push(`/gallery/${instructor._id}`);
				}}
			>
				<Carousel>
					{images.map(image => (
						<CardMedia
							key={instructor.id}
							component="img"
							src={image}
							alt={`Kite-Instructor ${instructor.name}`}
						/>
					))}
				</Carousel>
			</CardActionArea>
			<CardContent>
				<Typography variant="h6">{instructor.name}</Typography>
			</CardContent>
		</Card>
	);
};

export default CardInstructor;
