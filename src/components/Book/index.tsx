import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import type { State } from "@/redux";
import { Chapter0, Chapter1_1, Chapter1_2, Chapter2, Chapter3, GettingStarted, Settings, Story } from "@/pages";

export const Book = (): ReactElement => {
	const location = useSelector((state: State) => state.router.location);

	switch (location.pathname) {
		default:
		case "/getting-started":
			return <GettingStarted />;
		case "/settings":
			return <Settings />;
		case "/story":
			return <Story />;
		case "/chapter-0":
			return <Chapter0 />;
		case "/chapter-1":
			return <Chapter1_1 />;
		case "/chapter-1/2":
			return <Chapter1_2 />;
		case "/chapter-2":
			return <Chapter2 />;
		case "/chapter-3":
			return <Chapter3 />;
	}
};

export default Book;
