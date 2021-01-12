import type { AppActions } from "@/redux/actions";

export const CHANGE_COLOR = "@APP/CHANGE_COLOR";

export interface ChangeColorAction {
	type: typeof CHANGE_COLOR;
	color: string;
}

export default function (color: string): AppActions {
	return {
		type: CHANGE_COLOR,
		color,
	};
}
