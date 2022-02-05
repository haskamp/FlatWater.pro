import { useEffect } from "react";

const useLog = (key, value) => {
	useEffect(() => {
		console.log(key, value);
	}, [key, value]);
};

export default useLog;
