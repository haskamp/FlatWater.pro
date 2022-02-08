import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

const Todo = mongoose.model("Todo", Schema);
export default Todo;
