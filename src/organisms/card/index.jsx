import { Card } from "@mui/material";
import CardMainContent from "/src/molecules/card-main-content";
import CardExtendedContent from "/src/molecules/card-extended-content";
import CardFooter from "/src/molecules/card-footer";
import React from "react";

const CardProfile = ({ input }) => {
	return (
		<div>
			{input.map((card, index) => {
				return (
					<Card key={card.id} sx={{ maxWidth: 350 }}>
						<CardMainContent input={card} />
						<CardExtendedContent index={index} />
						<CardFooter index={index} />
					</Card>
				);
			})}
		</div>
	);
};

export default CardProfile;
