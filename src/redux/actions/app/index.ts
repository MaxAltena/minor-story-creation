import type { ChangeUIDAction } from "./changeUID";
import type { ChangeNameAction } from "./changeName";
import type { ChangeLocationAction } from "./changeLocation";
import type { ChangeYearAction } from "./changeYear";
import type { ChangeColorAction } from "./changeColor";

export type AppActions =
	| ChangeUIDAction
	| ChangeNameAction
	| ChangeLocationAction
	| ChangeYearAction
	| ChangeColorAction;

export { default as changeUID } from "./changeUID";
export * from "./changeUID";
export { default as changeName } from "./changeName";
export * from "./changeName";
export { default as changeLocation } from "./changeLocation";
export * from "./changeLocation";
export { default as changeYear } from "./changeYear";
export * from "./changeYear";
export { default as changeColor } from "./changeColor";
export * from "./changeColor";
