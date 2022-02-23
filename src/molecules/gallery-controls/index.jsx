import useStore from "/src/ions/store";
import FilterDialog from "/src/molecules/filter-dialog";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";

const GalleryControls = () => {
	const setView = useStore(state => state.setView);
	const [open, setOpen] = useState(false);
	return (
		<ButtonGroup variant="contained" sx={{ m: 1, background: "#FFFFFF" }}>
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
			<Tooltip title="Text">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setView("chip");
					}}
				>
					<ViewAgendaIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title="FilterLocations">
				<IconButton
					onClick={() => {
						setOpen(true);
					}}
				>
					<FilterAltIcon />
				</IconButton>
			</Tooltip>
			<FilterDialog open={open} setOpen={setOpen} />
		</ButtonGroup>
	);
};

export default GalleryControls;
