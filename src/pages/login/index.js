import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import { Button } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";
import { useSession, signIn, signOut } from "next-auth/react";

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
					<img width="100px" src={session.user.image} alt={session.user.name} />
					{/*add link for image in next config */}
					<h2>{session.user.name}</h2>
					<Button
						onClick={() => {
							signOut("google");
						}}
					>
						LogOut
					</Button>
				</div>
			) : (
				<div>
					<Button
						startIcon={<GitHub />}
						onClick={() => {
							signIn("github");
						}}
					>
						LogIn with GitHub
					</Button>
					<Button
						startIcon={<Google />}
						onClick={() => {
							signIn("google");
						}}
					>
						LogIn with Google
					</Button>
				</div>
			)}
		</Layout>
	);
};

export default LogIn;
