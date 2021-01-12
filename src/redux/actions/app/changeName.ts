import type { AppActions } from "@/redux/actions";

export const CHANGE_NAME = "@APP/CHANGE_NAME";

export interface ChangeNameAction {
	type: typeof CHANGE_NAME;
	name: string;
}

export default function (name: string): AppActions {
	return {
		type: CHANGE_NAME,
		name,
	};
}
