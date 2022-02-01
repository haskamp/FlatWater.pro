import React from "react";
import Link from "next/link";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<h1>Profile</h1>
			<Link href={"./index.jsx"}>{"nextPage"}</Link>
		</Layout>
	);
};

export default Page;
