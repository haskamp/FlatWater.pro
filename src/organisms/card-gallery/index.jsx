import React from "react";
import { Card } from "@mui/material";
import useStore from "/src/ions/store/index.jsx";
import CardFooter from "/src/molecules/card-footer/index.jsx";
import CardExtendedContent from "/src/molecules/card-extended-content/index.jsx";
import CardMainContent from "/src/molecules/card-main-content/index.jsx";

const CardGallery = () => {
	const cards = useStore(state => state.cards);

	return (
		<div>
			{cards.map((card, index) => {
				return (
					<div>
						<Card key={card.id} sx={{ maxWidth: 350 }}>
							<CardMainContent card={card} />
							<CardExtendedContent index={index} />
							<CardFooter index={index} />
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default CardGallery;
