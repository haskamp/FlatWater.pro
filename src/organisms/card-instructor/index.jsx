import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const CardInstructor = ({ instructor }) => {
	const router = useRouter();
	console.log("card", instructor);
	return (
		<Card>
			<CardActionArea
				onClick={() => {
					router.push(`/gallery/${instructor._id}`);
				}}
			>
				<CardMedia
					component="img"
					image={instructor.image}
					alt={`Kite-Instructor ${instructor.name}`}
				/>
			</CardActionArea>
			<CardContent>
				<Typography variant="h6">{instructor.name}</Typography>
			</CardContent>
		</Card>
	);
};

export default CardInstructor;
