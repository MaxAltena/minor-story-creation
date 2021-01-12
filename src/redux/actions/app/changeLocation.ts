import type { AppActions } from "@/redux/actions";

export const CHANGE_LOCATION = "@APP/CHANGE_LOCATION";

export interface ChangeLocationAction {
	type: typeof CHANGE_LOCATION;
	location: string;
}

export default function (location: string): AppActions {
	return {
		type: CHANGE_LOCATION,
		location,
	};
}
