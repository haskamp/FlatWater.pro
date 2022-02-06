import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { AccountBox, ViewAgenda } from "@mui/icons-material";
import React from "react";
import useStore from "../../ions/store";

const GalleryButton = () => {
	const setView = useStore(state => state.setView);
	return (
		<ButtonGroup>
			<Tooltip title="Expand">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setView("profile");
					}}
				>
					<AccountBox />
				</IconButton>
			</Tooltip>
			<Tooltip title="Expand">
				<IconButton
					aria-label="show more"
					onClick={() => {
						setView("chip");
					}}
				>
					<ViewAgenda />
				</IconButton>
			</Tooltip>
		</ButtonGroup>
	);
};

export default GalleryButton;
