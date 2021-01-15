import { ADD_KNOWLEDGE, CHANGE_CHAPTER, StoryActions } from "@/redux/actions";
import { playAudioFile } from "@/utils";

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
					if (!state.knowledge.general.includes(action.knowledge)) {
						playAudioFile("sparkle");

						return {
							...state,
							knowledge: {
								...state.knowledge,
								general: [...state.knowledge.general, action.knowledge],
							},
						};
					} else return state;
				case "personal":
					if (!state.knowledge.personal.includes(action.knowledge)) {
						playAudioFile("sparkle");

						return {
							...state,
							knowledge: {
								...state.knowledge,
								personal: [...state.knowledge.personal, action.knowledge],
							},
						};
					} else return state;
				case "character1":
					if (!state.knowledge.character1.includes(action.knowledge)) {
						playAudioFile("sparkle");

						return {
							...state,
							knowledge: {
								...state.knowledge,
								character1: [...state.knowledge.character1, action.knowledge],
							},
						};
					} else return state;
				default:
					return state;
			}
		case CHANGE_CHAPTER:
			playAudioFile("page-flip");

			return {
				...state,
				chapter: action.chapter,
			};
		default:
			return state;
	}
}
