import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Box, Stack } from "@mui/material";

const Header = () => {
	return (
		<header>
			<Stack direction="row" justifyContent="space-around" alignItems="center">
				<Box>
					<Image src="/wind.png" width={30} height={30} alt="logo" />
				</Box>
				<nav data-test-id="navigation">
					<Stack
						direction="row"
						justifyContent="space-evenly"
						alignItems="center"
						spacing={2}
					>
						<Link href="/">Home</Link>
						<Link href="/gallery">Gallery</Link>
						<Link href="/map">Map</Link>
						<Link href="/form">Form</Link>
					</Stack>
				</nav>
			</Stack>
		</header>
	);
};

export default Header;
