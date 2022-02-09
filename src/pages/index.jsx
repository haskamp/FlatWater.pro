import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Form from "/src/organisms/form";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My capstone project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1>Homepage</h1>
			<Form />
		</Layout>
	);
};

export default Page;
