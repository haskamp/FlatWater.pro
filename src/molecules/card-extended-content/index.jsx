import { CardContent, Collapse, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import useStore from "/src/ions/store/index.jsx";

import CardAvailabilities from "/src/molecules/card-availabilities/index.jsx";
import CardLanguages from "/src/molecules/card-languages/index.jsx";
import CardServices from "src/molecules/card-services/index.jsx";

const CardExtendedContext = ({ index }) => {
	const cards = useStore(state => state.cards);
	return (
		<Collapse in={cards[index].isExpanded} timeout="auto">
			<Divider />
			<CardContent>
				<Stack direction="row" justifyContent="space-between">
					<CardServices index={index} />
					<CardLanguages index={index} />
				</Stack>
				<br />
				<CardAvailabilities index={index} />
				<Typography variant="h6">{cards[index].slogan}</Typography>
				<Typography variant="body2">{cards[index].aboutyou}</Typography>
			</CardContent>
		</Collapse>
	);
};

export default CardExtendedContext;
