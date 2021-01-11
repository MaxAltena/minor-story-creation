import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import { configureStore, history } from "@/redux";
import App from "@/App";

const { store, persistor } = configureStore();

render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<p>Loading...</p>} persistor={persistor}>
				<ConnectedRouter history={history}>
					<Switch>
						<Route path="/:chapter/:story" render={() => <App />} />
						<Route path="/:chapter" render={() => <App />} />
						<Route render={() => <App />} />
					</Switch>
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
	document.getElementById("root")
);

if (import.meta.hot) import.meta.hot.accept();
