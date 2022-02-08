import React, { useEffect, useState } from "react";
import useStore from "/src/ions/store/index.jsx";

import CardProfile from "../card";
import CardChip from "../card-chip";
import GalleryButton from "/src/molecules/gallery-button";
import GalleryFilter from "/src/molecules/gallery-filter/index.jsx";
import { Stack } from "@mui/material";
const CardGallery = () => {
	const view = useStore(state => state.view);
	const filterStatus = useStore(state => state.filterStatus);
	const filteredCards = useStore(state => state.filteredCards);

	const [cards, setCards] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000/cards")
			.then(response => response.json())
			.then(data => setCards(data));
	}, []);
	return (
		<div>
			<Stack direction="row">
				<GalleryFilter />
				<GalleryButton />
			</Stack>

			{view === "profile" && <CardProfile input={filterStatus ? filteredCards : cards} />}
			{view === "chip" && <CardChip input={filterStatus ? filteredCards : cards} />}
		</div>
	);
};

export default CardGallery;
