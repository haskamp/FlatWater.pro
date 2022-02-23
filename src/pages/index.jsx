import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Home </title>
				<meta name="description " content="This is my Capstone Project" />
			</Head>
		</Layout>
	);
};

export default Page;
