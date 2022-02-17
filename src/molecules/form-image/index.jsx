import { Box, Button } from "@mui/material";
import React from "react";

const ImageUpload = () => {
	return (
		<Box>
			<label>
				<input
					multiple
					style={{ display: "none" }}
					type="file"
					accept="image/*"
					name="image"
				/>
				<Button variant="contained" component="span">
					Choose image
				</Button>
			</label>
			{/*			<label>
				<input
					type="file"
					capture="user"
					style={{ display: "none" }}
					accept="image/*"
					name="imageCapture"
				/>
				<IconButton aria-label="Take picture">
					<PhotoCamera />
				</IconButton>
			</label>*/}
		</Box>
	);
};

export default ImageUpload;
