import useStore from "/src/ions/store";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

const GalleryButton = () => {
	const setView = useStore(state => state.setView);
	return (
		<ButtonGroup>
			<Tooltip title="Profile">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setView("profile");
					}}
				>
					<AccountBoxIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title="Chio">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setView("chip");
					}}
				>
					<ViewAgendaIcon />
				</IconButton>
			</Tooltip>
		</ButtonGroup>
	);
};

export default GalleryButton;
