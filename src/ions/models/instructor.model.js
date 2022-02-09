import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	name: String,
	date: String,
	email: String,
	image: String,
	location: String,
	license: String,
	availabilities: [String],
	languages: [String],
	services: [String],
	slogan: String,
	aboutyou: String,
});

export default mongoose.models.Instructor || mongoose.model("Instructor", Schema);
