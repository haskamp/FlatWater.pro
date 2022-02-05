import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import useStore from "/src/ions/store/index.jsx";

const weekdays = ["man", "tue", "wed", "thu", "fri", "sat", "sun"];

const CardAvailabilities = ({ index }) => {
	const cards = useStore(state => state.cards);
	return (
		<ButtonGroup variant="outline" sx={{ width: "100%" }}>
			{weekdays.map((day, i) => {
				const cardAvailabilities = cards[index].availabilities;
				return (
					<Box
						key={weekdays[i]}
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
