import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import LoginDialog from "/src/molecules/login-dialog/index.jsx";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/router";

const NavBar = () => {
	const { data: session } = useSession();
	const router = useRouter();
	console.log("sessionnavbar", session);

	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleMenu = event => {
		console.log(anchorEl);
		console.log(event);
		setAnchorEl(event.currentTarget);
		console.log(anchorEl);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<HomeIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Home
					</Typography>
					{!session && (
						<div>
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
						</div>
					)}
					{session && (
						<div>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color="inherit"
								onClick={handleMenu}
							>
								<AccountCircle />
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
								onClose={handleClose}
							>
								<MenuItem
									onClick={() => {
										router.push("/profile/");
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
		</Box>
	);
};

export default NavBar;
