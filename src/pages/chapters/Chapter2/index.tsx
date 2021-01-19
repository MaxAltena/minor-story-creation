import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { addKnowledge, changeChapter, State } from "@/redux";

export const Chapter2 = () => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 2: --</h2>
					<p data-first>Chapter 2</p>
				</>
			}
			right={
				<>
					<Link to="/chapter-3" onClick={() => dispatch(changeChapter(3))} data-link>
						Continue to chapter 3
					</Link>
				</>
			}
		/>
	);
};
