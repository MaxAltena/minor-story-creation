import type { StoryActions } from "@/redux/actions";

export type KnowledgeType = "general" | "personal" | "character1" | "character2";

export const ADD_KNOWLEDGE = "@STORY/ADD_KNOWLEDGE";

export interface AddKnowledgeAction {
	type: typeof ADD_KNOWLEDGE;
	knowledge: string;
	knowledgeType: KnowledgeType;
}

export default function (knowledge: string, knowledgeType: KnowledgeType): StoryActions {
	return {
		type: ADD_KNOWLEDGE,
		knowledge,
		knowledgeType,
	};
}
