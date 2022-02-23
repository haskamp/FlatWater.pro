import { experimental_sx as sx } from "@mui/system";

export const MuiAppBar = {
	defaultProps: {},
	styleOverrides: {
		root: {
			backgroundColor: "#FFFFFF",
		},
	},
};
export const MuiAvatarGroup = {
	styleOverrides: {
		root: {
			"& .MuiAvatar-root": {
				border: 0,
			},
		},
	},
};
export const MuiCard = {
	defaultProps: {
		elevation: 10,
	},
	styleOverrides: {
		root: {
			borderRadius: 16,
			"& .MuiPaper-root": {
				borderBottomRightRadius: 0,
				borderBottomLeftRadius: 0,
			},
		},
	},
};
export const MuiChip = {
	defaultProps: {
		color: "secondary",
	},
	styleOverrides: {
		root: sx({
			px: 1,
			py: 0.25,
			borderRadius: 2, // 4px as default.
		}),
		label: {
			padding: "initial",
		},
		icon: sx({
			mr: 0.5,
			ml: "-2px",
		}),
	},
};
