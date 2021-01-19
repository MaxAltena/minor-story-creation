import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { changeChapter, State } from "@/redux";

export const Chapter3 = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 3: {app.name}&apos;s future</h2>
					<p>Detoxers: A story about {app.name}</p>
					<p>
						<strong>TO BE CONTINUED?</strong>
					</p>
					<Link to="/story" onClick={() => dispatch(changeChapter(4))} data-link>
						Back to homepage
					</Link>
				</>
			}
		/>
	);
};
