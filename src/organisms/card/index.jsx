import React from "react";
import { Card } from "@mui/material";
import useStore from "../../ions/store";
import CardFooter from "../../molecules/card-footer";
import CardExtendedContent from "../../molecules/card-extended-content";
import CardMainContent from "../../molecules/card-main-content";

const CardCollection = () => {
	const cards = useStore(state => state.cards);

	return (
		<div>
			{cards.map((card, index) => {
				return (
					<Card key={card.id} sx={{ maxWidth: 350 }}>
						<CardMainContent card={card} />
						<CardExtendedContent index={index} />
						<CardFooter index={index} />
					</Card>
				);
			})}
		</div>
	);
};

export default CardCollection;
