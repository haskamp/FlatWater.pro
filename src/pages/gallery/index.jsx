import Head from "next/head";
import React from "react";
import Layout from "/src/organisms/layout";
import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import CardInstructor from "/src/organisms/card-instructor";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MapIcon from "@mui/icons-material/Map";

const Gallery = ({ dbInstructors }) => {
	console.log(dbInstructors);

	const [value, setValue] = React.useState("gallery");
	console.log(value);
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Gallery </title>
				<meta key="description" name="description" content="Gallery" />
			</Head>
			<Box sx={{ flexGrow: 1 }}>
				<BottomNavigation
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						label="Gallery"
						value="gallery"
						icon={<AccountBoxIcon />}
					/>
					<BottomNavigationAction label="Map" value="map" icon={<MapIcon />} />
				</BottomNavigation>
			</Box>
			{dbInstructors.map(instructor => {
				return <CardInstructor key={instructor.id} instructor={instructor} />;
			})}
		</Layout>
	);
};
export default Gallery;

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
