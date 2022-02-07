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
import PropTypes from "prop-types";
import { AddLocation, Map } from "@mui/icons-material";
import { locations } from "src/ions/templates/form";
import useStore from "src/ions/store";

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

				<ListItem autoFocus button onClick={() => handleListItemClick("addLocation")}>
					<ListItemAvatar>
						<Avatar>
							<AddLocation />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Add location" />
				</ListItem>
			</List>
		</Dialog>
	);
};

const GalleryFilter = () => {
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(locations[1].label);
	const setFilterLocation = useStore(state => state.setFilterLocation);

	FilterDialog.propTypes = {
		onClose: PropTypes.func.isRequired,
		open: PropTypes.bool.isRequired,
		selectedValue: PropTypes.string.isRequired,
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = value => {
		setOpen(false);
		setSelectedValue(value);
		setFilterLocation(value);
	};
	return (
		<div>
			<Button variant="contained" onClick={handleClickOpen}>
				Filter
			</Button>
			<FilterDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
		</div>
	);
};

export default GalleryFilter;
