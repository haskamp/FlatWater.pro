import React, {useState} from "react";
import {
	CardContent,
	Card,
	CardMedia,
	Button,
	Typography,
	CardActions,
	CardActionArea,
	Collapse,
	IconButton, Divider

} from "@mui/material"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {LocalOffer, LocationOn, Message, Verified, ExpandMore, Email} from "@mui/icons-material";



const name = "Instructor Jesse";
import image from "../../../database/images/instructor.png";
const location = "Fehmarn";
const licence = "VDS Level II";
const price = "50€";
const email = "instructor@mail.com";





const Index = () => {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<>
			<Card >
				<CardActionArea style={{position: "relative"}}>
					<CardMedia component={"img"} image={image.src} alt={`Kite-Instructor ${name}`} />
					<CardContent>
						<Typography variant={"h4"}>{name}</Typography> {/*sx={{position: "absolute", width: "100%", top: 0, color: "white", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))", paddingTop: 1}}*/}
						<Typography variant={"h6"}><LocationOn/>{location}</Typography>
						<Typography variant={"h6"}><Verified/>{licence}</Typography>
					</CardContent>
				</CardActionArea>
				<Collapse in={isExpanded} timeout={"auto"} >  {/* unmountOnExit  */ }
					<Divider/>
					<CardContent>
						<Typography variant={"body2"}>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate dolor dolores, doloribus et ipsa minus non, nostrum provident quia soluta temporibus ullam. Consectetur dicta, dignissimos dolores quibusdam rem voluptas."}</Typography>
					</CardContent>
				</Collapse>
				<CardActions>
					{/*<Typography variant={"h6"}>{email}</Typography>*/}
					{/*Animation mit flip von buttom*/}
					<IconButton
						children={<ExpandMore/>}
						onClick={() => setExpanded(!isExpanded)}
						aria-expanded={isExpanded}
						aria-label="show more" />
					<Button variant={"text"} startIcon={<LocalOffer/>}>{price}{" per hour"}</Button>
					<Button variant={"contained"} startIcon={<Message/>}>Contact</Button>
				</CardActions>





			</Card>
		</>
	);
};

export default Index;
