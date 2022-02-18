import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import Navbar from "/src/molecules/navbar";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Home </title>
				<meta name="description " content="This is my Capstone Project" />
			</Head>
			<h1>Homepage</h1>
			<Navbar />
		</Layout>
	);
};

export default Page;
