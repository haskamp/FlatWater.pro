import LoginDialog from "/src/molecules/login-dialog/index.jsx";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import HomeIcon from "@mui/icons-material/Home";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import LoginIcon from "@mui/icons-material/Login";
import MapIcon from "@mui/icons-material/Map";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/assets/homepage/Group.png";

// NavBar hide on Scroll-Funktion
const HideOnScroll = props => {
	const { children } = props;
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
};

const NavBar = props => {
	// Get current user session
	const { data: session } = useSession();
	// Routing
	const router = useRouter();
	const pathNames = router.pathname.split("/");
	const currentPath = pathNames[pathNames.length - 1];
	const routerNameMap = {
		"": "Home",
		gallery: "Gallery",
		profile: "Profile",
		map: "Map",
		form: "Form",
	};
	const routerIconMap = {
		"": <HomeIcon />,
		gallery: <DashboardIcon />,
		profile: <KitesurfingIcon />,
		map: <MapIcon />,
		form: <DashboardCustomizeIcon />,
	};
	// States
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	return (
		<>
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => {
								router.push("/");
							}}
						>
							<Image height="34px" width="34px" src={logo} alt="Logo Flatwater" />
						</IconButton>
						<Box sx={{ flexGrow: 1 }}>
							<Chip
								label={routerNameMap[currentPath]}
								icon={routerIconMap[currentPath]}
							/>
						</Box>
						{/* When User is NOT logged in, show Login Button and open Dialog o.C.*/}
						{!session && (
							<Box>
								<Button
									color="inherit"
									startIcon={<LoginIcon />}
									onClick={() => {
										setOpen(true);
									}}
								>
									Login
								</Button>
								<LoginDialog open={open} setOpen={setOpen} />
							</Box>
						)}
						{/* When User is logged in, show Login Button and open Menu o.C.*/}
						{session && (
							<div>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									color="inherit"
									onClick={event => {
										setAnchorEl(event.currentTarget);
									}}
								>
									<Avatar src={session.user.image} />
								</IconButton>
								<Menu
									keepMounted
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorEl)}
									onClose={() => {
										setAnchorEl(null);
									}}
								>
									<MenuItem
										onClick={() => {
											router.push("/profile");
										}}
									>
										Profile
									</MenuItem>
									<MenuItem
										onClick={() => {
											signOut();
										}}
									>
										Logout
									</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</>
	);
};

export default NavBar;
