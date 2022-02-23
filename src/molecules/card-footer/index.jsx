import useStore from "/src/ions/store/index.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MessageIcon from "@mui/icons-material/Message";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

const CardFooter = () => {
	const setIsExpanded = useStore(state => state.setIsExpanded);
	return (
		<CardActions sx={{ justifyContent: "space-between" }}>
			<Tooltip title="Expand">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setIsExpanded();
					}}
				>
					<ExpandMoreIcon />
				</IconButton>
			</Tooltip>
			<Button startIcon={<MessageIcon />}>Contact</Button>
		</CardActions>
	);
};
export default CardFooter;
