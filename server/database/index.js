import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
	cached = { connection: null, promise: null };
	global.mongoose = cached;
}

async function dbConnect() {
	if (cached.connection) {
		console.log("connected to DB by cache");
		return cached.connection;
	}

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI, {
				bufferCommands: false,
			})
			.then(mongoose => {
				console.log("connected to DB by connect");
				return mongoose;
			});
	}
	cached.connection = await cached.promise;
	return cached.connection;
}

export default dbConnect;
