import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { addKnowledge, changeChapter, State } from "@/redux";

export const Chapter2 = (): ReactElement => {
	// const app = useSelector((state: State) => state.app);
	// const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 2: The beginning</h2>
					<p data-first>
						You came running down the street and walked into the darkest alleyway you have ever seen.
					</p>
					<p>-recruiting of first few members for the detoxers</p>
					<p>- show kindness from miss smith</p>
					<p>- battle against corpos</p>
				</>
			}
			right={
				<>
					<div className="row">
						<Link to="/chapter-2/1" data-link>
							option1
						</Link>
						<Link to="/chapter-2/2" data-link>
							option2
						</Link>
					</div>
				</>
			}
		/>
	);
};

export const Chapter2_choice = ({ choice }: { choice: 1 | 2 }): ReactElement => {
	// const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<p>
						{choice === 1 && (
							<strong
								style={{ cursor: "help" }}
								onClick={() => dispatch(addKnowledge("option1", "general"))}
							>
								option1
							</strong>
						)}
						{choice === 2 && (
							<strong
								style={{ cursor: "help" }}
								onClick={() => dispatch(addKnowledge("option2", "general"))}
							>
								option2
							</strong>
						)}
					</p>
					<Link to="/chapter-3" onClick={() => dispatch(changeChapter(3))} data-link>
						Continue to chapter 3
					</Link>
				</>
			}
		/>
	);
};
