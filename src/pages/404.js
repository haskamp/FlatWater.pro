import Layout from "/src/organisms/layout";
import Head from "next/head";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | 404 </title>
				<meta name="description " content="This is my Capstone Project" />
			</Head>
			<h1>Link not found</h1>
			<h2>
				Go back <Link href="/">home</Link>
			</h2>
		</Layout>
	);
};

export default NotFound;
