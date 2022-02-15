import React from "react";
import { Card } from "@mui/material";

import CardExtendedContent from "/src/molecules/card-extended-content/index.jsx";
import CardChipMain from "../../molecules/card-chip-main";

const CardChip = ({ input }, index) => {
	return (
		<div>
			<Card key={input.id} sx={{ maxWidth: 350 }}>
				<CardChipMain card={input} index={index} />
				<CardExtendedContent index={index} />
			</Card>
		</div>
	);
};

export default CardChip;
