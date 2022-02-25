import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import router from "next/router";

export const StyledBackground = styled.div`
	&::before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80");
		background-position: 50% 50%;
		background-size: cover;
		filter: brightness(0.98);
	}
`;

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Home </title>
				<meta name="description " content="This is FlatWater.pro" />
			</Head>
			<StyledBackground />
			<Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
				<Box sx={{ mt: 2, ml: 2 }}>
					<Typography variant="h4" color="white">
						Learn kitesurfing
					</Typography>
					<Typography variant="h4" color="white">
						where, when & how you want,
					</Typography>
					<Typography variant="h4" color="#d9698c">
						your choice. your freedom.
					</Typography>
				</Box>
				<Box sx={{ position: "absolute", bottom: 120, right: 20 }}>
					<Typography variant="h4" color="white">
						Find your Instructor
					</Typography>
					<Button
						variant="contained"
						sx={{ right: -100, mt: 1, background: "#d9698c", color: "white" }}
						onClick={() => {
							router.push("/gallery");
						}}
					>
						To Gallery
					</Button>
				</Box>
			</Box>
		</Layout>
	);
};

export default Page;
