import React from "react";
import { Card } from "@mui/material";

import CardExtendedContent from "/src/molecules/card-extended-content/index.jsx";
import CardChipMain from "../../molecules/card-chip-main";

const CardChip = ({ input }) => {
	return (
		<div>
			{input.map((card, index) => {
				return (
					<Card key={card.id} sx={{ maxWidth: 350 }}>
						<CardChipMain card={card} index={index} />
						<CardExtendedContent index={index} />
					</Card>
				);
			})}
		</div>
	);
};

export default CardChip;
