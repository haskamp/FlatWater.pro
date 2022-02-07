import React, { useState } from "react";
import { Button } from "@mui/material";

import { FilterList } from "@mui/icons-material";
import FilterDialog from "/src/molecules/gallery-filter-dialog";
const GalleryFilter = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button
				variant="contained"
				startIcon={<FilterList />}
				onClick={() => {
					setOpen(true);
				}}
			>
				Filter
			</Button>
			<FilterDialog open={open} setOpen={setOpen} />
		</div>
	);
};

export default GalleryFilter;
