import Head from "next/head";
import React, { useState } from "react";
import Layout from "/src/organisms/layout";
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import Link from "next/link";
import dbConnect from "/server/database";
import Instructor from "/src/ions/models/instructor.model";
import { getSession } from "next-auth/react";
import { Card } from "@mui/material";
import CardMainContent from "/src/molecules/card-main-content";
import CardExtendedContent from "/src/molecules/card-extended-content";
import CardFooter from "/src/molecules/card-footer";
import Form from "/src/organisms/form/index.jsx";

const Profile = ({ dbInstructor }) => {
	const { status } = useSession();
	const [edit, setEdit] = useState(false);

	return (
		<Layout>
			<Head>
				<title key="title">CoastCoach | Profile</title>
				<meta name="description" content="Profile" />
			</Head>
			<h1>Profile</h1>
			{status === "authenticated" ? (
				<>
					<Button
						onClick={() => {
							setEdit(!edit);
						}}
					>
						Edit Profile
					</Button>
					{edit ? (
						<Form />
					) : (
						<Card>
							<CardMainContent input={dbInstructor} />
							<CardExtendedContent input={dbInstructor} />
							<CardFooter />
						</Card>
					)}
				</>
			) : (
				<p>
					Please <Link href="/">Login</Link> to create a instructor profile
				</p>
			)}
		</Layout>
	);
};

export default Profile;

export const getServerSideProps = async context => {
	const session = await getSession(context);
	await dbConnect();
	try {
		const data = await Instructor.findOne({ user: session.user.id });
		return {
			props: { dbInstructor: JSON.parse(JSON.stringify(data)) },
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
