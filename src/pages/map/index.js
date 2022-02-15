import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dynamic from "next/dynamic";

const Page = () => {
	const NoSsrMap = dynamic(() => import("/src/molecules/map"), { ssr: false });

	return (
		<Layout>
			<Head>
				<title key="title">Map</title>
				<meta key="description" name="description" content="Map" />
			</Head>
			<h1>Map</h1>
			<NoSsrMap />
		</Layout>
	);
};

export default Page;
