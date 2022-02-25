import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import Form from "/src/organisms/form/index.jsx";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Page = () => {
	const { status } = useSession();

	return (
		<Layout>
			<Head>
				<title key="title">My capstone project</title>
				<meta key="description" name="description" content="Form" />
			</Head>
			<h1>Form</h1>

			{status === "authenticated" ? (
				<Form />
			) : (
				<p>
					Please <Link href="/">Login</Link> to create a instructor profile
				</p>
			)}
		</Layout>
	);
};

export default Page;
