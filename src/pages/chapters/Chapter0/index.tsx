import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { addKnowledge, changeChapter, State } from "@/redux";

export const Chapter0 = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 0: Introduction</h2>
					<p data-first>
						A diary experience with {app.name}! <i>You</i> are the main character within the story. You will
						get to know what people in the future fight for and some want to live for.
					</p>
					<p>
						<strong>Detoxers</strong> is set in the year {app.year} where big corporations and governments,
						the{" "}
						<mark
							style={{ cursor: "help" }}
							onClick={() =>
								dispatch(
									addKnowledge(
										"Corpos. The big corporations and governments with control over the media.",
										"general"
									)
								)
							}
						>
							corpos
						</mark>
						, control the human population. They do this by controlling what we see and consume on the
						different medias that exist in this world.
					</p>
					<p>
						These medias are so wide spread and common, such as simple news outlets to even the apps used on
						your phone. Any and all are made to keep everyone in line and even follow an ideal painted by
						the corpos.
					</p>
				</>
			}
			right={
				<>
					<p>
						Corpos have long ruled and reigned the majority of the population called{" "}
						<mark
							style={{ cursor: "help" }}
							onClick={() =>
								dispatch(
									addKnowledge(
										"Common folk. Just the average person and the majority of the world.",
										"general"
									)
								)
							}
						>
							common folk
						</mark>
						.
					</p>
					<p>
						Just like 99.9% of the population, {app.name} is also part of the common folk. Yet, this would
						change in the future as you might just find out.
					</p>
					<p>
						During the story, you might encounter different choices you can make. These are shown through
						`// TODO`.{" "}
						<strong>
							Don&apos;t forget, any and all choices you make, are final. It resembles actual life in a
							way.
						</strong>
					</p>
					<Link to="/chapter-1" onClick={() => dispatch(changeChapter(1))} data-link>
						Continue to Chapter 1: Prologue
					</Link>
				</>
			}
		/>
	);
};
