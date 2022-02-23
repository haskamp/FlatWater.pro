import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import useStore from "/src/ions/store";
import CardAvailabilities from "/src/molecules/card-availabilities";
import CardExtendedContent from "/src/molecules/card-extended-content";
import CardFooter from "/src/molecules/card-footer";
import CardFooterSmall from "/src/molecules/card-footer-small";
import CardMainGallery from "/src/molecules/card-main-gallery";
import GalleryButton from "/src/molecules/gallery-button";
import Layout from "/src/organisms/layout";
import { Column, Grid } from "@contour/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import GalleryFilter from "/src/molecules/gallery-filter";

const Gallery = ({ dbInstructors }) => {
	const view = useStore(state => state.view);
	const filterStatus = useStore(state => state.filterStatus);
	const filteredInstructor = useStore(state => state.filteredInstructor);
	const setFilteredInstructor = useStore(state => state.setFilteredInstructor);
	const instructor = useStore(state => state.instructor);
	const setInstructor = useStore(state => state.setInstructor);
	const router = useRouter();

	if (filterStatus) {
		setFilteredInstructor(dbInstructors);
		return (let data = filteredInstructor);
	} else {
		setInstructor(dbInstructors);
		const data = instructor;
	}
	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Gallery </title>
				<meta key="description" name="description" content="Gallery" />
			</Head>
			<Stack direction="row" justifyContent="space-around">
				<GalleryButton />
				<GalleryFilter />
			</Stack>
			<Grid justify="center" colCount={{ xs: 1, s: 1, m: 2, l: 6, xl: 6 }}>
				{data.map(instructor => {
					return (
						<Column key={instructor._id} colSpan={{ xs: 1, s: 1, m: 1, l: 2, xl: 2 }}>
							{view === "profile" ? (
								<Card sx={{ position: "relative" }}>
									<CardMainGallery input={instructor} />
									<CardExtendedContent input={instructor} />
									<CardFooter input={instructor} />
								</Card>
							) : (
								<Card key={instructor._id} width="100%" height={150}>
									<CardContent
										sx={{ pb: 0 }}
										onClick={() => {
											router.push(`/profile/${instructor.user}`);
										}}
									>
										<Stack direction="row" justifyContent="space-between">
											<Typography
												variant="overline"
												sx={{ display: "flex", alignItems: "center" }}
											>
												{`${instructor.license}-Instructor`}
											</Typography>
											<Typography
												variant="overline"
												sx={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<LocationOnIcon sx={{ mr: 0.2, fontSize: 15 }} />
												{instructor.location}
											</Typography>
										</Stack>
										<Typography variant="h4">{instructor.name}</Typography>
										<CardAvailabilities input={instructor} />
									</CardContent>
									<CardExtendedContent input={instructor} />
									<CardFooterSmall input={instructor} />
								</Card>
							)}
						</Column>
					);
				})}
			</Grid>
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
