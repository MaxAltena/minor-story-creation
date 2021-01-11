import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import localForage from "localforage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer, initialState, State } from "@/redux/reducers";

export const history = createBrowserHistory();

export const configureStore = (
	preloadedState = initialState
): {
	store: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	persistor: Persistor;
} => {
	const devMiddlewares = [loggerMiddleware];
	const baseMiddlewares = [thunkMiddleware, routerMiddleware(history)];

	let middlewares = [];
	switch (import.meta.env.MODE) {
		case "production":
		default:
			middlewares = [...baseMiddlewares];
			break;
		case "development":
			middlewares = [...baseMiddlewares, ...devMiddlewares];
			break;
	}
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	localForage.config({
		driver: [localForage.INDEXEDDB, localForage.WEBSQL, localForage.LOCALSTORAGE],
		name: "localforage",
		version: 1.0,
		description: "Used to store data for the application",
		size: 4980736,
		storeName: "keyvaluepairs",
	});

	const persistedReducer = persistReducer<State>(
		{
			key: "root",
			storage: localForage,
			stateReconciler: hardSet,
			blacklist: ["router"],
		},
		createRootReducer(history)
	);

	const store = createStore(persistedReducer, preloadedState, composedEnhancers);
	const persistor = persistStore(store);

	return { store, persistor };
};
