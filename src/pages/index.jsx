import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import Form from "/src/organisms/form";
import dynamic from "next/dynamic";
import Gallery from "/src/organisms/gallery";
import CardGallery from "/src/organisms/gallery-json";
import CardProfile from "/src/organisms/card";
import useStore from "/src/ions/store";

const Page = () => {
	{
		/*		{instructors.map(instructor => (
				<div key={instructor.id}>{instructor.name}</div>
			))}*/
	}
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Home </title>
				<meta name="description " content="This is my Capstone Project" />
			</Head>
			<h1>Homepage</h1>
		</Layout>
	);
};

export default Page;

/*

export async function getServerSideProps() {
	const { default: dbConnect } = await import("/server/database/index.js");
	const { default: Instructor } = await import("/src/ions/models/instructor.model.js");
	await dbConnect();
	try {
		const instructors = await Instructor.find();
		return {
			props: {
				dbInstructors: JSON.parse(JSON.stringify(instructors)),
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				cards: [],
			},
		};
	}
}







	const view = useStore(state => state.view);
	const cards = useStore(state => state.cards);
	// console.log(cards);
	const filterStatus = useStore(state => state.filterStatus);
	const filteredCards = useStore(state => state.filteredCards);
	return (
		<div>
			<Stack direction="row">
				{/!*				<GalleryFilter />
				<GalleryButton />*!/}
			</Stack>
			{/!*{view === "profile" && <CardProfile input={cards} />}
			{view === "chip" && <CardChip input={cards} />}*!/}
		</div>
	);
};

export default CardGallery;
/!*filterStatus ? filteredCards :

 */
