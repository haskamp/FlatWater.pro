import React from "react";
import useStore from "/src/ions/store/index.jsx";
import CardProfile from "../card";
import CardChip from "../card-chip";
import GalleryButton from "/src/molecules/gallery-button";
import GalleryFilter from "/src/molecules/gallery-filter/index.jsx";
import { Stack } from "@mui/material";

const CardGallery = async () => {
	const view = useStore(state => state.view);
	const cards = useStore(state => state.cards);
	return (
		<div>
			<Stack direction="row">
				<GalleryFilter />
				<GalleryButton />
			</Stack>
			{view === "profile" && <CardProfile input={cards} />}
			{view === "chip" && <CardChip input={cards} />}
		</div>
	);
};

export default CardGallery;
