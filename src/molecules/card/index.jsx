import React, { useState } from "react";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Collapse,
	Divider,
	IconButton,
	Tooltip,
	Typography,
} from "@mui/material";
import { ExpandMore, LocalOffer, LocationOn, Message, Verified } from "@mui/icons-material";
import image from "../../../database/images/instructor.png";

// Dummy Data Card
const name = "Instructor Jesse";
const location = "Fehmarn";
const licence = "VDS Level II";
const price = "50€";

// Dummy Data Card-extended
const language = ["eng", "ger", "esp"];
const homespots = ["Gold", "Gollendorf", "Grüner Brink"];
const slogan = "This is my slogan";
const introduction =
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis harum hic illum iste modi optio perspiciatis, quibusdam tempora ut! Architecto incidunt provident quasi quibusdam sapiente sit totam velit voluptatum.";
const services = ["Pickup", "Material rental"];
const availabilities = ["Sat", "Sun"];

const Index = () => {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<Card sx={{ maxWidth: 350 }}>
			{/*Card Action Area I*/}
			<CardActionArea style={{ position: "relative" }}>
				<CardMedia component="img" image={image.src} alt={`Kite-Instructor ${name}`} />
				<CardContent>
					<Typography variant="h4">{name}</Typography>{" "}
					{/*sx={{position: "absolute", width: "100%", top: 0, color: "white", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))", paddingTop: 1}}*/}
					<Typography variant="h6">
						<LocationOn />
						{location}
					</Typography>
					<Typography variant="h6">
						<Verified />
						{licence}
					</Typography>
				</CardContent>
			</CardActionArea>
			{/*Card Expended Area I*/}
			<Collapse in={isExpanded} timeout="auto">
				{" "}
				{/* unmountOnExit  */}
				<Divider />
				<CardContent>
					<Typography variant="h6">Language:</Typography>
					<Typography variant="body2">{language.join(" ")}</Typography>
					<Typography variant="h6">Homespots:</Typography>
					<Typography variant="body2">{homespots.join(" ")}</Typography>
					<Typography variant="h6">{slogan}</Typography>
					<Typography variant="body2">{introduction}</Typography>
					<Typography variant="h6">Services:</Typography>
					<Typography variant="body2">{services.join(" ")}</Typography>
					<Typography variant="h6">Availabilities:</Typography>
					<Typography variant="body2">{availabilities.join(" ")}</Typography>
				</CardContent>
			</Collapse>
			{/*Card Action Area II*/}
			<CardActions>
				{/*<Typography variant="h6">{email}</Typography>*/}
				{/*Animation mit flip von buttom*/}
				{/*set title to collapse if open*/}
				<Tooltip title="Expand">
					<IconButton
						aria-expanded={isExpanded}
						aria-label="show more"
						onClick={() => {
							setExpanded(!isExpanded);
						}}
					>
						<ExpandMore />
					</IconButton>
				</Tooltip>

				<Button variant="text" startIcon={<LocalOffer />}>
					{price} per hour
				</Button>
				<Button variant="contained" startIcon={<Message />}>
					Contact
				</Button>
			</CardActions>
		</Card>
	);
};

export default Index;
