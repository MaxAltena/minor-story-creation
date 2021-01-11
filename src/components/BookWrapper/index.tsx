import React, { ReactElement } from "react";

import { Overlay } from "@/components";
import { StyledContainer, StyledContainerSide } from "./styles";
import type { Props } from "./types";

// Inspired by https://codepen.io/erinesullivan/pen/gxdbzp

export const BookWrapper = ({ left, right }: Props): ReactElement => (
	<>
		<Overlay />

		<StyledContainer>
			<StyledContainerSide>{left}</StyledContainerSide>
			<StyledContainerSide>{right}</StyledContainerSide>
		</StyledContainer>
	</>
);

export default BookWrapper;
