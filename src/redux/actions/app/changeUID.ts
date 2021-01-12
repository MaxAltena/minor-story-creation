import type { AppActions } from "@/redux/actions";

export const CHANGE_UID = "@APP/CHANGE_UID";

export interface ChangeUIDAction {
	type: typeof CHANGE_UID;
	uid: string;
}

export default function (uid: string): AppActions {
	return {
		type: CHANGE_UID,
		uid,
	};
}
