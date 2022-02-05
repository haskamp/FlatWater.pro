import React from "react";
import { Card } from "@mui/material";
import useStore from "/src/molecules/card-services/index.jsx";
import CardFooter from "/src/molecules/card-footer/index.jsx";
import CardExtendedContent from "/src/molecules/card-extended-content/index.jsx";
import CardMainContent from "/src/molecules/card-main-content/index.jsx";

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
