import { CardContent, Collapse, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import useStore from "../../ions/store";

import CardAvailabilities from "../card-availabilities";
import CardLanguages from "../card-languages";
import CardServices from "../card-languages/card-services";

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
