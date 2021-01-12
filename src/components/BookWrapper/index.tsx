import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { Overlay } from "@/components";
import type { State } from "@/redux";
import { StyledContainer, StyledContainerSide } from "./styles";
import type { Props } from "./types";
import { Link } from "react-router-dom";

// Inspired by https://codepen.io/erinesullivan/pen/gxdbzp

export const BookWrapper = ({ left, right }: Props): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const location = useSelector((state: State) => state.router.location);

	let footerElement1, footerElement2;

	switch (location.pathname) {
		case "/getting-started":
			break;
		case "/settings":
			footerElement1 = (
				<span>
					<Link to="/story">Story</Link>
				</span>
			);
			break;
		case "/chapter-1":
		case "/chapter-2":
		case "/chapter-3":
			footerElement1 = (
				<span>
					<Link to="/story">Story</Link>
				</span>
			);
			footerElement2 = (
				<span>
					<Link to="/settings">Settings</Link>
				</span>
			);
			break;
		default:
			footerElement1 = <span className="space"></span>;
			footerElement2 = (
				<span>
					<Link to="/settings">Settings</Link>
				</span>
			);
			break;
	}

	return (
		<>
			<Overlay />

			<StyledContainer>
				<header>
					<h1>
						<Link to="/getting-started">Story Creation – Detoxers</Link>
					</h1>
					<h6>{app.name}</h6>
				</header>
				<StyledContainerSide>{left}</StyledContainerSide>
				<StyledContainerSide>{right}</StyledContainerSide>
				<footer>
					{footerElement1}
					{footerElement2}
				</footer>
			</StyledContainer>
		</>
	);
};

export default BookWrapper;
