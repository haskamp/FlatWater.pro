import React, { useState } from "react";
import {
	Avatar,
	Button,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";

import { FilterList, LocationOff, Map } from "@mui/icons-material";
import { locations } from "/src/ions/templates/form";
import useStore from "/src/ions/store";

const FilterDialog = props => {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = value => {
		onClose(value);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Choose location</DialogTitle>
			<List sx={{ pt: 0 }}>
				{locations.map(location => (
					<ListItem
						key={location.label}
						button
						onClick={() => handleListItemClick(location.label)}
					>
						<ListItemAvatar>
							<Avatar>
								<Map />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={location.label} />
					</ListItem>
				))}

				<ListItem autoFocus button onClick={() => handleListItemClick(false)}>
					<ListItemAvatar>
						<Avatar>
							<LocationOff />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Delete Filter" />
				</ListItem>
			</List>
		</Dialog>
	);
};

const GalleryFilter = () => {
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(locations[1].label);
	const setFilteredCards = useStore(state => state.setFilteredCards);
	const setFilterStatus = useStore(state => state.setFilterStatus);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = value => {
		setOpen(false);
		setSelectedValue(value);
		setFilteredCards(value);
		value ? setFilterStatus(true) : setFilterStatus(false);
	};
	return (
		<div>
			<Button variant="contained" startIcon={<FilterList />} onClick={handleClickOpen}>
				Filter
			</Button>
			<FilterDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
		</div>
	);
};

export default GalleryFilter;
