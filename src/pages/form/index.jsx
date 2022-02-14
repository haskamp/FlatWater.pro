import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import Form from "/src/organisms/form/index.jsx";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My capstone project</title>
				<meta key="description" name="description" content="Form" />
			</Head>
			<h1>Form</h1>
			<Form />
		</Layout>
	);
};

export default Page;
