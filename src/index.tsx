import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Normalize } from "styled-normalize";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";

import { configureStore } from "@/redux";
import { App } from "@/components";
import { GlobalStyle, theme } from "@/styles";

const { store, persistor } = configureStore();

render(
	<StrictMode>
		<Reset />
		<Normalize />
		<GlobalStyle />

		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>{bootstrapped => <App bootstrapped={bootstrapped} />}</PersistGate>
			</Provider>
		</ThemeProvider>
	</StrictMode>,
	document.getElementById("root")
);

if (import.meta.hot) import.meta.hot.accept();
