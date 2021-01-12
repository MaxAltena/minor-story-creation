import { CombinedState, combineReducers, Reducer } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import type { History } from "history";

import appReducer, { AppState, initialAppState } from "@/redux/reducers/app";
import storyReducer, { StoryState, initialStoryState } from "@/redux/reducers/story";
import type { AppActions, StoryActions } from "@/redux/actions";

export type State = CombinedState<{
	app: AppState;
	story: StoryState;
	router: RouterState;
}>;

export const initialState = {
	app: initialAppState,
	story: initialStoryState,
};

export type Actions = AppActions | StoryActions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createRootReducer = (history: History<any>): Reducer<State> =>
	combineReducers({
		app: appReducer,
		story: storyReducer,
		router: connectRouter(history),
	});

export * from "./app";
export * from "./story";
