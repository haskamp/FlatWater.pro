import React from "react";
import useStore from "/src/ions/store/index.jsx";

import CardProfile from "../card";
import CardChip from "../card-chip";
import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const CardGallery = () => {
	const view = useStore(state => state.view);
	const setView = useStore(state => state.setView);

	return (
		<div>
			<ButtonGroup>
				<Tooltip title="Expand">
					<IconButton
						aria-label="show more"
						onClick={() => {
							setView("profile");
						}}
					>
						<ExpandMore />
					</IconButton>
				</Tooltip>
				<Tooltip title="Expand">
					<IconButton
						aria-label="show more"
						onClick={() => {
							setView("chip");
						}}
					>
						<ExpandMore />
					</IconButton>
				</Tooltip>
			</ButtonGroup>
			;{view ? <CardProfile /> : <CardChip />}
		</div>
	);
};

export default CardGallery;
