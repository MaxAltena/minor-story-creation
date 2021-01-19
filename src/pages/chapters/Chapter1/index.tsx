import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { addKnowledge, changeChapter, State } from "@/redux";

export const Chapter1 = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 1: Prologue</h2>
					<p data-first>
						You wake up from your alarm. It is already 8:15AM and you thought you only snoozed once.
						&lsquo;Another day of being late for the school based in {app.location} I guess...&rsquo; you
						thought to yourself. As you slowly got out of bed, you silently mumbled to yourself:
						&lsquo;Luckily this is one of the final days of university.&rsquo;
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
					<p>
						Yet you had to work the hardest out of the whole class, because you were disadvantaged by one of
						the teachers:{" "}
						<strong
							style={{ cursor: "help" }}
							onClick={() =>
								dispatch(
									addKnowledge(
										"Miss Williams. That one teacher you wished you never met...",
										"character1"
									)
								)
							}
						>
							Miss Williams
						</strong>
						. She was always giving you bad grades for no justifiable reason, or maybe she simply did not
						like the way you smiled.
					</p>
					<div className="row">
						<Link
							to="/chapter-1/1"
							data-link
							onClick={() =>
								dispatch(addKnowledge("Seems like she didn't like the way I smiled.", "character1"))
							}
						>
							She didn&apos;t like the way I smiled
						</Link>
						<Link
							to="/chapter-1/2"
							data-link
							onClick={() =>
								dispatch(addKnowledge("Seems like she didn't like my ethnicity.", "character1"))
							}
						>
							She didn&apos;t like my ethnicity
						</Link>
					</div>
				</>
			}
		/>
	);
};

export const Chapter1_choice = ({ choice }: { choice: 1 | 2 }): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<p>
						It seemed that {choice === 1 && <strong>she didn&apos;t like the way I smiled</strong>}
						{choice === 2 && <strong>she didn&apos;t like my ethnicity</strong>} I think.
					</p>
					<p>
						Never the less, I always needed to work hard to complete the class. So I asked another teacher
						to help me with doing so. Her name was{" "}
						<strong
							style={{ cursor: "help" }}
							onClick={() =>
								dispatch(
									addKnowledge(
										"Miss Smith. The kindest and most heartwarming person I ever met.",
										"character2"
									)
								)
							}
						>
							Miss Smith
						</strong>
						.
					</p>
					<p>
						She helped you through the easier and thoughest times you had at the university. &lsquo;How are
						you doing {app.name}?&rsquo; she always asked whenever I encountered her.
					</p>
					<p>
						But today at school, she was fed up. She did not look happy at all. You approached her and asked
						&lsquo;What is going on Miss Smith?&rsquo; She quickly responded with &lsquo;I am done with Miss
						Williams and all others that disadvantage students based on their views.{" "}
						<span
							style={{ cursor: "help" }}
							onClick={() => dispatch(addKnowledge("She got fired for speaking up.", "character2"))}
						>
							Speaking up only made it worse; I got fired!
						</span>
						&rsquo;
					</p>
					<Link to="/chapter-2" onClick={() => dispatch(changeChapter(2))} data-link>
						Continue to chapter 2
					</Link>
				</>
			}
		/>
	);
};
