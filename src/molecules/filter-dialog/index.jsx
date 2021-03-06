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
	const setFilterStatus = useStore(state => state.setFilterStatus);

	const handleClose = value => {
		setOpen(false);
		value ? setFilterStatus(value) : setFilterStatus(null);
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
							<Avatar sx={{ background: "#d9698c", color: "white" }}>
								<Map />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={location.label} />
					</ListItem>
				))}
				<ListItem autoFocus button onClick={() => handleClose(null)}>
					<ListItemAvatar>
						<Avatar sx={{ background: "#d9698c", color: "white" }}>
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
