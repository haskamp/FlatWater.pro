import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";
import { GitHub, Image } from "@mui/icons-material";

const LogIn = () => {
	// Sign In/Out Handle with data destructured as session
	const { data: session } = useSession();
	console.log(session);
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Home </title>
				<meta name="description " content="This is my Capstone Project" />
			</Head>
			<h1>Homepage</h1>
			{session ? (
				<div>
					<Image width="100px" src={session.user.image} alt={session.user.name} />
					<h2>{session.user.name}</h2>
					<Button
						onClick={() => {
							signOut("github");
						}}
					>
						LogOut
					</Button>
				</div>
			) : (
				<Button
					startIcon={<GitHub />}
					onClick={() => {
						signIn("github");
					}}
				>
					LogIn with GitHub
				</Button>
			)}
		</Layout>
	);
};

export default LogIn;
