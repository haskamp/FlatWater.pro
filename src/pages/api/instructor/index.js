import mongoose from "mongoose";
import process from "node:process";
import Todo from "/src/ions/models/todo.model.js";

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

const handler = async (request, response, next) => {
	const { method } = request;
	console.log(method);
	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Todo.find();
				response.status(200).json(mongoResponse);
			} catch (err) {
				next(err);
			}
			break;
		case "POST":
			try {
				/*const data = new Todo({ name: "testneu", isChecked: false });
				await data.save();
				await Todo.create({ name: "testneu2", isChecked: false });
				response.status(200).send("sucess");*/
			} catch (err) {
				next(err);
			}
			break;
		default:
			response.status(404).send("Not found");
			break;
	}
};

export default handler;
