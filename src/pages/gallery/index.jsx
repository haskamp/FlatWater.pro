import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import CardGallery from "/src/organisms/card-gallery";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>Gallery</h1>
			<CardGallery />
		</Layout>
	);
};

export default Page;
