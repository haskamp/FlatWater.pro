import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import CardExtendedContent from "/src/molecules/card-extended-content";
import CardFooter from "/src/molecules/card-footer";
import CardMainContent from "/src/molecules/card-main-content";
import Layout from "/src/organisms/layout";
import { Column, Grid } from "@contour/react";
import Card from "@mui/material/Card";
import Head from "next/head";
import React from "react";

const Page = ({ dbInstructor }) => {
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Instructor</title>
				<meta key="description" name="description" content="content" />
			</Head>
			<h1>Instructor</h1>
			<Grid justify="center" colCount={{ xs: 1, s: 1, m: 2, l: 4, xl: 4 }}>
				<Column colSpan={{ xs: 1, s: 1, m: 1, l: 2, xl: 2 }}>
					<Card sx={{ position: "relative" }}>
						<CardMainContent input={dbInstructor} />
						<CardExtendedContent input={dbInstructor} />
						<CardFooter input={dbInstructor} />
					</Card>
				</Column>
			</Grid>
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
			return { params: { id: instructor.user } };
		});
		console.log("paths", paths);
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
