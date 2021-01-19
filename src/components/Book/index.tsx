import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import type { State } from "@/redux";
import { Chapter0, Chapter1, Chapter1_choice, Chapter2, Chapter3, GettingStarted, Settings, Story } from "@/pages";

export const Book = (): ReactElement => {
	const location = useSelector((state: State) => state.router.location);

	switch (location.pathname) {
		case "/getting-started":
			return <GettingStarted />;
		case "/settings":
			return <Settings />;
		default:
		case "/story":
			return <Story />;
		case "/chapter-0":
			return <Chapter0 />;
		case "/chapter-1":
			return <Chapter1 />;
		case "/chapter-1/1":
			return <Chapter1_choice choice={1} />;
		case "/chapter-1/2":
			return <Chapter1_choice choice={2} />;
		case "/chapter-2":
			return <Chapter2 />;
		case "/chapter-3":
			return <Chapter3 />;
	}
};

export default Book;
