import { AppActions, CHANGE_NAME, CHANGE_UID } from "@/redux/actions";

export interface AppState {
	uid: string;
	name: string;
}

export const initialAppState = {
	uid: "",
	name: "",
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
		default:
			return state;
	}
}
