import { Box, Button, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import React from "react";

const PhotoUpload = () => {
	return (
		<Box>
			<label>
				<input
					multiple
					style={{ display: "none" }}
					type="file"
					accept="image/*"
					name="photo"
				/>
				<Button variant="contained" component="span">
					Choose photo
				</Button>
			</label>
			<label>
				<input
					type="file"
					capture="user"
					style={{ display: "none" }}
					accept="image/*"
					name="photo"
				/>
				<IconButton aria-label="Take picture">
					<PhotoCamera />
				</IconButton>
			</label>
		</Box>
	);
};

export default PhotoUpload;
