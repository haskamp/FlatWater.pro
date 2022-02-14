import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import CardChip from "/src/organisms/card-chip";
import GalleryButton from "/src/molecules/gallery-button";
import GalleryFilter from "/src/molecules/gallery-filter";
import { Stack } from "@mui/material";
import useStore from "/src/ions/store";

export const getStaticProps = async () => {
	await dbConnect();
	const data = await Instructor.find();
	return {
		props: { dbInstructors: JSON.parse(JSON.stringify(data)) },
	};
};

const Page = ({ dbInstructors }) => {
	const setInstructors = useStore(state => state.setInstructors);
	const setCard = useStore(state => state.setCard);
	const cards = useStore(state => state.cards);

	{
		dbInstructors.map(instructor => {
			return setCard(instructor);
		});
	}

	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Gallery </title>
				<meta key="description" name="description" content="Gallery" />
			</Head>
			<h1>Gallery</h1>
			<div>
				<Stack direction="row">
					<GalleryFilter />
					<GalleryButton />
				</Stack>
			</div>
			{cards.map((card, index) => {
				<CardChip input={card} index={index} />;
			})}
		</Layout>
	);
};

export default Page;
