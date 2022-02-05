import useStore from "src/molecules/card-services/index.jsx";
import { Divider, Stack } from "@mui/material";
import React from "react";
import { Accessibility, AirportShuttle, Kitesurfing } from "@mui/icons-material";

const ServiceIcons = {
	gear: Kitesurfing,
	wetsuit: Accessibility,
	ride: AirportShuttle,
};

const CardServices = ({ index }) => {
	const cards = useStore(state => state.cards);
	return (
		<Stack direction="row" spacing={2} divider={<Divider flexItem orientation="vertical" />}>
			{cards[index].services.map((service, i) => {
				const Icon = ServiceIcons[service];
				return <Icon key={service[i]} fontSize="large" />;
			})}
		</Stack>
	);
};
export default CardServices;
