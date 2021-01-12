import type { AppActions } from "@/redux/actions";

export const CHANGE_YEAR = "@APP/CHANGE_YEAR";

export interface ChangeYearAction {
	type: typeof CHANGE_YEAR;
	year: number;
}

export default function (year: number): AppActions {
	return {
		type: CHANGE_YEAR,
		year,
	};
}
