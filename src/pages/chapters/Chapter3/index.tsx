import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { addKnowledge, changeChapter, State } from "@/redux";

export const Chapter3 = () => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 3: --</h2>
					<p data-first>Chapter 3</p>
				</>
			}
			right={
				<>
					<Link to="/story" onClick={() => dispatch(changeChapter(4))} data-link>
						End story
					</Link>
				</>
			}
		/>
	);
};
