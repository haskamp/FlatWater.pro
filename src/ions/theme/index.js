import { createTheme } from "@mui/material";
import {
	MuiAppBar,
	MuiAvatarGroup,
	MuiCard,
	MuiChip,
	MuiFab,
	MuiAvatar,
} from "/src/ions/theme/components";

// @import url('https://fonts.googleapis.com/css2?family=Karla&family=Yanone+Kaffeesatz:wght@400;700&display=swap');

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#07b9b9", // 8bc1c1
		},
		secondary: {
			main: "#d9698c",
		},
		background: {
			paper: "#FFFFFF",
			default: "#7dc0c0",
		},
	},
	typography: {
		h4: {
			fontFamily: "impact",
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
	components: {
		MuiAppBar,
		MuiChip,
		MuiCard,
		MuiAvatarGroup,
		MuiAvatar,
		MuiFab,
	},
});

export default theme;
