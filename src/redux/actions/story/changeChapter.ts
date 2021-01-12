import type { StoryActions } from "@/redux/actions";

export const CHANGE_CHAPTER = "@STORY/CHANGE_CHAPTER";

export interface ChangeChapterAction {
	type: typeof CHANGE_CHAPTER;
	chapter: number;
}

export default function (chapter: number): StoryActions {
	return {
		type: CHANGE_CHAPTER,
		chapter,
	};
}
