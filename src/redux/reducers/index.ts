import { CombinedState, combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import type { History } from "history";

import appReducer, { AppState, initialAppState } from "@/redux/reducers/app";
import type { AppActions } from "@/redux/actions/app";

export type State = CombinedState<{
	app: AppState;
	router: RouterState;
}>;

export type Actions = AppActions;

export const initialState = {
	app: initialAppState,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createRootReducer = (history: History<any>): Reducer<State> =>
	combineReducers({
		app: appReducer,
		router: connectRouter(history),
	});

export * from "./app";
