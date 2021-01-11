import type { ChangeUIDAction } from "./changeUID";
import type { ChangeNameAction } from "./changeName";

export type AppActions = ChangeUIDAction | ChangeNameAction;

export { default as changeUID } from "./changeUID";
export * from "./changeUID";
export { default as changeName } from "./changeName";
export * from "./changeName";
