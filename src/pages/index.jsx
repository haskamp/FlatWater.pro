import Head from "next/head";
import React from "react";
import useGet from "../ions/hooks/fetch/get";
import Layout from "../organisms/layout";
import Card from "../molecules/card/index.jsx";

const Page = () => {
	const { data, loading, error } = useGet("/api/hello");

	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Home</h1>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
			<Card/>
		</Layout>
	);
};

export default Page;
