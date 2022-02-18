import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "/server/database/adapter/mongodb.js";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	// Configure one or more authentication providers
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGlE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		async session({ session, user }) {
			return { ...session, user };
		},
	},
});
