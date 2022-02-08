import process from "node:process";
import mongoose from "mongoose";
import { Data } from "/src/ions/models/data.model";

// const mongoose = require('mongoose'); warum nicht benutzt?
const connect = async uri => {
	try {
		console.log("Connecting to MongoDB");
		await mongoose.connect(uri);
	} catch (error_) {
		console.error(error_);
	}
};
const uri = process.env.MONGODB_URI;
void connect(uri);
// ---------------------------------------------------------------------

const card = await new Data({ name: "Instructor" });
card.save();
console.log(card);

/*
const content = request.body.data;

const [data, setData] = useState("");
const submitForm = async () => {
	const response = await fetch("/api/instructor", {
		method: "POST",
		body: JSON.stringify({ data: data }),
		header: { "Content-Type": "application/json" },
	});
	const data = await response.json();
	console.log(data);
};
*/

/*const database = () => {
	const getData = async () => {};
	return (
		<div>
			<button onClick={getData}>Click</button>
			<form onSubmit={() => submitForm}>
		<input
				value={data}
				onChange={event => {
					setData(event.target.value);
				}}
			/>
		<button type="submit">Submit</button>
</form>

		</div>
	);
};

export default database;*/
