import { ADD_KNOWLEDGE, StoryActions } from "@/redux/actions";

export interface StoryState {
	knowledge: Array<string>;
}

export const initialStoryState: StoryState = {
	knowledge: ["I know my name!"],
};

export default function (state = initialStoryState, action: StoryActions): StoryState {
	switch (action.type) {
		case ADD_KNOWLEDGE:
			return {
				...state,
				knowledge: [...state.knowledge, action.knowledge],
			};
		default:
			return state;
	}
}
