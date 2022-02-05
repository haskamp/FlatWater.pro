import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import { PhotoCamera } from "@mui/icons-material";

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
					/*onChange={ev => handleCapture(ev)}*/
				/>
				<Button variant="contained" component="span">
					Choose image
				</Button>
			</label>
			<label>
				<input
					type="file"
					capture="user"
					style={{ display: "none" }}
					accept="image/*"
					name="image"
				/>
				<IconButton aria-label="Take picture">
					<PhotoCamera />
				</IconButton>
			</label>
		</Box>
	);
};

export default ImageUpload;
