import axios from "axios";
import { useEffect, useState } from "react";

const usePost = (url, input) => {
	const [state, setState] = useState({
		data: null,
		loading: false,
		error: null,
	});
	useEffect(() => {
		setState(({ data }) => ({
			data,
			error: null,
			loading: true,
		}));
		axios
			.post(url, input)
			.then(({ data }) => {
				setState({
					data,
					error: null,
					loading: false,
				});
			})
			.catch(error => {
				setState(({ data }) => ({
					data,
					error,
					loading: false,
				}));
			});
	}, [url, input]);
	return state;
};

export default usePost;
