import Box from "@mui/material/Box";
import CardMedia from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CardMainContent = ({ input }) => {
	return (
		<Box>
			<Carousel indicators={false} animation="slide" duration={300}>
				{input.images.map(image => (
					<CardMedia
						key={input._id}
						elevation={0}
						component="img"
						src={image}
						alt={`Kite-Instructor ${input.name}`}
						width="100%"
						height={400}
						sx={{ objectFit: "cover", objectPosition: "center" }}
					/>
				))}
			</Carousel>
			<CardContent
				sx={{
					p: 2,
					zIndex: 2,
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
				}}
			>
				<Typography variant="overline" sx={{ display: "flex", alignItems: "center" }}>
					{`${input.license}-Instructor`}
				</Typography>
				<Typography variant="h4">{input.name}</Typography>
			</CardContent>
		</Box>
	);
};

export default CardMainContent;
