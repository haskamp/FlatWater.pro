import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React from "react";

const flags = {
	ger: "https://cdn-icons-png.flaticon.com/512/197/197571.png",
	eng: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
	esp: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
};

const CardLanguages = ({ input }) => {
	return (
		<AvatarGroup max={4}>
			{input.languages.map(language => {
				return <Avatar key={language} src={flags[language]} alt={language} />;
			})}
		</AvatarGroup>
	);
};
export default CardLanguages;
