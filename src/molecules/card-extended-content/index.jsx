import useStore from "/src/ions/store/index.jsx";
import CardAvailabilities from "/src/molecules/card-availabilities/index.jsx";
import CardLanguages from "/src/molecules/card-languages/index.jsx";
import CardServices from "/src/molecules/card-services/index.jsx";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

const CardExtendedContext = ({ input }) => {
	const isExpanded = useStore(state => state.isExpanded);
	return (
		<Collapse in={isExpanded} timeout="auto">
			<CardContent>
				<Stack direction="row" justifyContent="space-between">
					<CardServices input={input} />
					<CardLanguages input={input} />
				</Stack>
				<CardAvailabilities input={input} />
				<Typography variant="h6">{input.slogan}</Typography>
				<Typography variant="body2">{input.aboutyou}</Typography>
			</CardContent>
		</Collapse>
	);
};

export default CardExtendedContext;
