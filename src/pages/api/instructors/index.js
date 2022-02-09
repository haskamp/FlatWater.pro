import dbConnect from "/src/ions/database";
import Instructor from "/src/ions/models/instructor.model.js";

const handler = async (request, response) => {
	await dbConnect();

	const method = request.method;
	console.log(method);

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Instructor.find();
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;
		case "POST":
			try {
				console.log(request.body);
				const mongoResponse = await Instructor.create(request.body);
				response.status(201).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;
		default:
			response.status(404).send("Not found");
			break;
	}
};

export default handler;
