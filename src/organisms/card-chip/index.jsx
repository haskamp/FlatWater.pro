import React from "react";
import { Card } from "@mui/material";
import useStore from "/src/ions/store/index.jsx";
import CardExtendedContent from "/src/molecules/card-extended-content/index.jsx";
import CardChipMain from "../../molecules/card-chip-main";

const CardChip = () => {
	const cards = useStore(state => state.cards);

	return (
		<div>
			{cards.map((card, index) => {
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
