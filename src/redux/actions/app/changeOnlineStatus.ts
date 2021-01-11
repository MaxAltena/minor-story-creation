import type { AppActions } from "@/redux/actions";

export type OnlineStatus = "ONLINE" | "OFFLINE" | "UNKNOWN";

export const CHANGE_ONLINE_STATUS = "@APP/CHANGE_ONLINE_STATUS";

export interface ChangeOnlineStatusAction {
	type: typeof CHANGE_ONLINE_STATUS;
	onlineStatus: OnlineStatus;
}

export default function (onlineStatus: OnlineStatus): AppActions {
	return {
		type: CHANGE_ONLINE_STATUS,
		onlineStatus,
	};
}
