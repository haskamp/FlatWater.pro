import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Form from "/src/organisms/form";
import dynamic from "next/dynamic";

const NoSsrMap = dynamic(() => import("/src/molecules/map/"), { ssr: false });

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My capstone project</title>
				<meta name="description " content="This is my Capstone Project" />
			</Head>
			<NoSsrMap />
			<h1>Homepage</h1>
			<Form />
		</Layout>
	);
};

export default Page;
