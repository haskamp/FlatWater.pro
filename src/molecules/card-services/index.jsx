import { Divider, Stack } from "@mui/material";
import React from "react";
import { Accessibility, AirportShuttle, Kitesurfing } from "@mui/icons-material";

const ServiceIcons = {
	gear: Kitesurfing,
	wetsuit: Accessibility,
	ride: AirportShuttle,
};

const CardServices = ({ input }) => {
	return (
		<Stack direction="row" gap={1} divider={<Divider flexItem orientation="vertical" />}>
			{input.services.map(service => {
				const Icon = ServiceIcons[service];
				return <Icon key={service} fontSize="large" />;
			})}
		</Stack>
	);
};
export default CardServices;
