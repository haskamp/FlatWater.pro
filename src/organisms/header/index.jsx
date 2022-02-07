import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<nav data-test-id="navigation">
				<Link href="/">Home</Link>
			</nav>
		</header>
	);
};

export default Header;
