import type { AddKnowledgeAction } from "./addKnowledge";
import type { ChangeChapterAction } from "./changeChapter";

export type StoryActions = AddKnowledgeAction | ChangeChapterAction;

export { default as addKnowledge } from "./addKnowledge";
export * from "./addKnowledge";
export { default as changeChapter } from "./changeChapter";
export * from "./changeChapter";
