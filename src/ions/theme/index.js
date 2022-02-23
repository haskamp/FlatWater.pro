import { createTheme } from "@mui/material";
import { MuiAppBar, MuiAvatarGroup, MuiCard, MuiChip } from "/src/ions/theme/components";

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#07b9b9",
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
	},
});

export default theme;
