import type { ReactNode } from "react";

export interface Props {
	speedMultiplier?: number;
	sizeMultiplier?: number;
	backgroundColor?: string;
	children?: ReactNode;
}

export interface StyledContainerProps {
	speedMultiplier?: number;
}

export interface StyledFullpageContainerProps {
	backgroundColor?: string;
}
