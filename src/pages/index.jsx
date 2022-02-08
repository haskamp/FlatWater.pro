import Head from "next/head";
import React from "react";
import useGet from "../ions/hooks/fetch/get";
import Layout from "../organisms/layout";
import Gallery from "/src/organisms/gallery";
import Form from "/src/organisms/form";
import FormEdit from "/src/organisms/form-edit";

const Page = () => {
	const { data, loading, error } = useGet("/api/hello");

	return (
		<Layout>
			<Head>
				<title key="title">My capstone project</title>
				<meta key="description" name="description" content="This is my capstone project" />
			</Head>
			<h1>Homepage</h1>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
			<FormEdit />
			<Gallery />
			<Form />
		</Layout>
	);
};

export default Page;
