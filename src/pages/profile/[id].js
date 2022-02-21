import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import { Card } from "@mui/material";
import CardMainContent from "/src/molecules/card-main-content";
import CardExtendedContent from "/src/molecules/card-extended-content";
import CardFooter from "/src/molecules/card-footer";

const Page = ({ dbInstructor }) => {
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Instructor</title>
				<meta key="description" name="description" content="content" />
			</Head>
			<h1>Instructor</h1>
			<Card>
				<CardMainContent input={dbInstructor} />
				<CardExtendedContent input={dbInstructor} />
				<CardFooter />
			</Card>
		</Layout>
	);
};

export default Page;

export const getStaticPaths = async () => {
	await dbConnect();
	try {
		const instructors = await Instructor.find();
		const paths = await instructors.map(instructor => {
			console.log("id", instructor.user, typeof instructor.user);
			return { params: { id: JSON.parse(JSON.stringify(instructor.user)) } };
		});

		return {
			paths,
			fallback: false,
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticProps = async ({ params }) => {
	console.log("params", params);
	const id = params.id;
	await dbConnect();
	try {
		const instructor = await Instructor.findOne({ user: id });
		return {
			props: { dbInstructor: JSON.parse(JSON.stringify(instructor)) },
		};
	} catch (err) {
		console.log(err);
	}
};
