import {
	Box,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import { ExpandMore, LocationOn, Message } from "@mui/icons-material";
import React from "react";
import useStore from "/src/ions/store/index.jsx";

const CardChipMain = ({ card, index }) => {
	return (
		<Stack direction="row">
			<CardActionArea style={{ position: "relative" }}>
				<CardMedia
					component="img"
					image={card.image}
					alt={`Kite-Instructor ${card.name}`}
				/>
			</CardActionArea>
			<Box width={400}>
				<CardContent>
					<Typography variant="h5">{card.name}</Typography>
					<Typography variant="body1">
						<LocationOn />
						{card.location}
						<br />
						50€ per hour
					</Typography>
				</CardContent>
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
					<Tooltip title="Expand">
						<IconButton aria-label="contact">
							<Message />
						</IconButton>
					</Tooltip>
				</CardActions>
			</Box>
		</Stack>
	);
};

export default CardChipMain;
