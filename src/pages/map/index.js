import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dynamic from "next/dynamic";

const NoSsrMap = dynamic(() => import("/src/molecules/map"), { ssr: false });

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Map</title>
				<meta key="description" name="description" content="Map" />
			</Head>
			<NoSsrMap />
		</Layout>
	);
};

export default Page;
