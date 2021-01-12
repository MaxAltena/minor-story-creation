import type { StoryActions } from "@/redux/actions";

export const ADD_KNOWLEDGE = "@STORY/ADD_KNOWLEDGE";

export interface AddKnowledgeAction {
	type: typeof ADD_KNOWLEDGE;
	knowledge: string;
}

export default function (knowledge: string): StoryActions {
	return {
		type: ADD_KNOWLEDGE,
		knowledge,
	};
}
