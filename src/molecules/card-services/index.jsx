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
		<Stack direction="row" spacing={2} divider={<Divider flexItem orientation="vertical" />}>
			{input.services.map((service, i) => {
				const Icon = ServiceIcons[service];
				return <Icon key={service[i]} fontSize="large" />;
			})}
		</Stack>
	);
};
export default CardServices;
