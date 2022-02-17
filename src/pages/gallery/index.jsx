import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import CardInstructor from "/src/organisms/card-instructor";

const Page = ({ dbInstructors }) => {
	console.log(dbInstructors);
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Gallery </title>
				<meta key="description" name="description" content="Gallery" />
			</Head>
			<h1>Gallery</h1>
			{dbInstructors.map(instructor => {
				return <CardInstructor key={instructor.id} instructor={instructor} />;
			})}
		</Layout>
	);
};
export default Page;

export const getStaticProps = async () => {
	await dbConnect();
	try {
		const data = await Instructor.find();
		return {
			props: { dbInstructors: JSON.parse(JSON.stringify(data)) },
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				dbInstructors: [],
			},
		};
	}
};
