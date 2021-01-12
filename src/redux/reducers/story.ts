import { ADD_KNOWLEDGE, CHANGE_CHAPTER, StoryActions } from "@/redux/actions";

export interface StoryState {
	knowledge: {
		general: Array<string>;
		character1: Array<string>;
		personal: Array<string>;
	};
	chapter: number;
}

export const initialStoryState: StoryState = {
	knowledge: {
		general: [],
		personal: ["I know my name!"],
		character1: [],
	},
	chapter: 1,
};

export default function (state = initialStoryState, action: StoryActions): StoryState {
	switch (action.type) {
		case ADD_KNOWLEDGE:
			switch (action.knowledgeType) {
				case "general":
					return {
						...state,
						knowledge: {
							...state.knowledge,
							general: [...state.knowledge.general, action.knowledge],
						},
					};
				case "personal":
					return {
						...state,
						knowledge: {
							...state.knowledge,
							personal: [...state.knowledge.personal, action.knowledge],
						},
					};
				case "character1":
					return {
						...state,
						knowledge: {
							...state.knowledge,
							character1: [...state.knowledge.character1, action.knowledge],
						},
					};
				default:
					return {
						...state,
						knowledge: {
							...state.knowledge,
						},
					};
			}
		case CHANGE_CHAPTER:
			return {
				...state,
				chapter: action.chapter,
			};
		default:
			return state;
	}
}
