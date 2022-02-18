import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "/server/database/adapter/mongodb.js";

export default NextAuth({
	// Configure one or more authentication providers
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	callbacks: {
		async session({ session, user }) {
			return { ...session, user };
		},
	},
});
