import React from "react";
import useStore from "/src/ions/store/index.jsx";

import CardProfile from "../card";
import CardChip from "../card-chip";
import GalleryButton from "../../molecules/gallery-button";

const CardGallery = () => {
	const view = useStore(state => state.view);
	const filterLocation = useStore(state => state.filterLocation);

	/*	if (card.location.includes(filterLocation)) {
		{view === "profile" && <CardProfile />}
		{view === "chip" && <CardChip />}
	} else {
		{view === "profile" && <CardProfile />}
		{view === "chip" && <CardChip />}
	}
	*/

	return (
		<div>
			<GalleryButton />
			{view === "profile" && <CardProfile />}
			{view === "chip" && <CardChip />}
		</div>
	);
};

export default CardGallery;
