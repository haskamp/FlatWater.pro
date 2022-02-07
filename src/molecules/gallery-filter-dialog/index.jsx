import {
	Avatar,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import { locations } from "/src/ions/templates/form";
import { LocationOff, Map } from "@mui/icons-material";
import React from "react";
import useStore from "/src/ions/store";

const FilterDialog = props => {
	const { open, setOpen } = props;
	const setFilteredCards = useStore(state => state.setFilteredCards);
	const setFilterStatus = useStore(state => state.setFilterStatus);

	const handleClose = value => {
		setOpen(false);
		setFilteredCards(value);
		value ? setFilterStatus(true) : setFilterStatus(false);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Choose location</DialogTitle>
			<List sx={{ pt: 0 }}>
				{locations.map(location => (
					<ListItem
						key={location.label}
						button
						onClick={() => handleClose(location.label)}
					>
						<ListItemAvatar>
							<Avatar>
								<Map />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={location.label} />
					</ListItem>
				))}

				<ListItem autoFocus button onClick={() => handleClose(false)}>
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

export default FilterDialog;
