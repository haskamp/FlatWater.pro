import useStore from "/src/ions/store/index.jsx";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AvatarGroup from "@mui/material/AvatarGroup";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

const ServiceIcons = {
	gear: KitesurfingIcon,
	wetsuit: AccessibilityIcon,
	ride: AirportShuttleIcon,
};

const flags = {
	ger: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
	eng: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
	esp: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
};

const CardFooter = ({ input }) => {
	const setIsExpanded = useStore(state => state.setIsExpanded);
	return (
		<CardActions>
			<Stack direction="row" sx={{ alignItems: "center" }}>
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
				<AvatarGroup max={4}>
					{input.services.map(service => {
						const Icon = ServiceIcons[service];
						return (
							<Avatar
								key={service}
								sx={{
									width: 24,
									height: 24,
									color: "white",
									bgcolor: "secondary.main",
								}}
							>
								<Icon key={service} sx={{ fontSize: 22 }} />
							</Avatar>
						);
					})}
				</AvatarGroup>
				<AvatarGroup max={4}>
					{input.languages.map(language => {
						return (
							<Avatar
								key={language}
								sx={{ width: 24, height: 24 }}
								src={flags[language]}
								alt={language}
							/>
						);
					})}
				</AvatarGroup>
			</Stack>
		</CardActions>
	);
};
export default CardFooter;
