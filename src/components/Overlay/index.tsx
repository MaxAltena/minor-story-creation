import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import type { State } from "@/redux";
import { StyledOverlay } from "./styles";

export const Overlay = (): ReactElement => {
	const color = useSelector((state: State) => state.app.color);

	return (
		<StyledOverlay backgroundColor={color}>
			<div className="background top"></div>
			<div className="background right"></div>
			<div className="background bottom"></div>
			<div className="background left"></div>
			<div className="book top "></div>
			<div className="book right"></div>
			<div className="book bottom"></div>
			<div className="book left"></div>
			<div className="page curve top left"></div>
			<div className="page curve top right"></div>
			<div className="page center"></div>
			<div className="page curve bottom left"></div>
			<div className="page curve bottom right"></div>
			<div className="page border top"></div>
			<div className="page border right"></div>
			<div className="page border bottom"></div>
			<div className="page border left"></div>
		</StyledOverlay>
	);
};

export default Overlay;
