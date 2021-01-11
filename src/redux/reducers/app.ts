import { AppActions, CHANGE_ONLINE_STATUS, OnlineStatus } from "@/redux/actions";

export interface AppState {
	onlineStatus: OnlineStatus;
}

export const initialAppState: AppState = {
	onlineStatus: "UNKNOWN",
};

export default function (state = initialAppState, action: AppActions): AppState {
	switch (action.type) {
		case CHANGE_ONLINE_STATUS:
			return {
				...state,
				onlineStatus: action.onlineStatus,
			};
		default:
			return state;
	}
}
