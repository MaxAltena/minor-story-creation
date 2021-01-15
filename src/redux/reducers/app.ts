import { AppActions, CHANGE_COLOR, CHANGE_LOCATION, CHANGE_NAME, CHANGE_UID, CHANGE_YEAR } from "@/redux/actions";
import { theme } from "@/styles";
import { playAudioFile } from "@/utils";

export interface AppState {
	uid: string;
	name: string;
	location: string;
	year: number;
	color: typeof theme.colors.books.primary | typeof theme.colors.books.secondary | typeof theme.colors.books.tertiary;
}

export const initialAppState: AppState = {
	uid: "",
	name: "",
	location: "The Netherlands",
	year: new Date().getFullYear() + 35,
	color: theme.colors.books.secondary,
};

export default function (state = initialAppState, action: AppActions): AppState {
	switch (action.type) {
		case CHANGE_UID:
			return {
				...state,
				uid: action.uid,
			};
		case CHANGE_NAME:
			return {
				...state,
				name: action.name,
			};
		case CHANGE_LOCATION:
			return {
				...state,
				location: action.location,
			};
		case CHANGE_YEAR:
			return {
				...state,
				year: action.year,
			};
		case CHANGE_COLOR:
			playAudioFile("air-hit");

			return {
				...state,
				color: action.color,
			};
		default:
			return state;
	}
}
