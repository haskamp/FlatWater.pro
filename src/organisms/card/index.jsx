import { Card } from "@mui/material";
import CardMainContent from "../../molecules/card-main-content";
import CardExtendedContent from "../../molecules/card-extended-content";
import CardFooter from "../../molecules/card-footer";
import React from "react";
import useStore from "../../ions/store";

const CardProfile = () => {
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

export default CardProfile;
