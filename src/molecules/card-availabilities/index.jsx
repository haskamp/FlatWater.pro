import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const CardAvailabilities = ({ input }) => {
	return (
		<ButtonGroup fullWidth variant="outline" sx={{ my: 2 }}>
			{weekdays.map(day => {
				const cardAvailabilities = input.availabilities;
				return (
					<Box
						key={day}
						disableRipple
						component={Button}
						variant={!cardAvailabilities.includes(day) ? "outlined" : "contained"}
						size="small"
						disabled={!cardAvailabilities.includes(day)}
					>
						{day}
					</Box>
				);
			})}
		</ButtonGroup>
	);
};

export default CardAvailabilities;
