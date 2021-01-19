import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { addKnowledge, changeChapter, State } from "@/redux";

export const Chapter1_1 = () => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 1: Prologue</h2>
					<p data-first>
						You wake up from your alarm. It is already 8:15AM and you thought you only snoozed once.
						&lsquo;Another day of being late for school I guess...&rsquo; you thought to yourself. As you
						slowly got out of bed, you silently mumbled to yourself: &lsquo;Luckily this is one of the final
						days of university.&rsquo;
					</p>
					<p>
						As you were about to finish university to become a history teacher, the class of {app.year - 5}{" "}
						was one you would like to have never known. They share a ton of dumb things with you on Facebook
						and YouTube like those cat videos.
					</p>
					<dl>
						<dt>
							<strong>Facebook and YouTube</strong>
						</dt>
						<dd>
							<em>Media websites</em>
							<br />
							sources which control what you view on your timeline and eventually believe in
						</dd>
					</dl>
				</>
			}
			right={
				<>
					<Link to="/chapter-1/2" data-link>
						Continue
					</Link>
				</>
			}
		/>
	);
};

export const Chapter1_2 = () => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<p>Chapter 1 / 2</p>
				</>
			}
			right={
				<>
					<Link to="/chapter-2" onClick={() => dispatch(changeChapter(2))} data-link>
						Continue to chapter 2
					</Link>
				</>
			}
		/>
	);
};
