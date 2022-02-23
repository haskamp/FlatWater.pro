import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material";
import theme from "/src/ions/theme";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<ThemeProvider theme={theme}>
			<SessionProvider session={session}>
				<CssBaseline />
				<Component {...pageProps} />
			</SessionProvider>
		</ThemeProvider>
	);
};
export default App;
