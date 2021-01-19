import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import type { KnowledgeType, State } from "@/redux";
import { playAudioFile } from "@/utils";

export const Story = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const story = useSelector((state: State) => state.story);

	return (
		<BookWrapper
			left={
				<>
					<h2>Detoxers</h2>
					<p data-first>
						The story starts here: your central hub of information. You have the knowledge at your disposal
						that you&apos;ve experienced and gathered throughout the story.
					</p>
					<div className="card" data-chapter style={{ border: `2px solid ${app.color}` }}>
						{story.chapter === 0 ? (
							<>
								<p>Start with the introduction</p>
								<Link to={`/chapter-${story.chapter}`} onClick={() => playAudioFile("page-flip")}>
									Start
								</Link>
							</>
						) : (
							<>
								<p>Next up</p>
								<Link
									to={`/chapter-${story.chapter >= 4 ? 1 : story.chapter}`}
									onClick={() => playAudioFile("page-flip")}
								>
									Chapter {story.chapter >= 4 ? 1 : story.chapter}
								</Link>
							</>
						)}
					</div>
				</>
			}
			right={
				<>
					<p>
						Getting knowledgable is doable through experiencing the story of <strong>{app.name}</strong>.
						For now, you&apos;ve collected the following knowledge:
					</p>
					<ul>
						{Object.entries(story.knowledge).map((value: [string, Array<string>], index: number) => {
							const knowledgeType = value[0] as KnowledgeType;
							let header = "";

							switch (knowledgeType) {
								case "general":
									header = "General";
									break;
								case "personal":
									header = "Personal";
									break;
								case "character1":
									header = "Character 1";
									break;
								default:
									header = "Other";
									break;
							}

							return (
								<>
									<li key={index}>
										<strong>{header} knowledge</strong>
									</li>
									<ul>
										{value[1].map((value: string, index: number) => (
											<li key={index}>{value}</li>
										))}
									</ul>
								</>
							);
						})}
					</ul>
				</>
			}
		/>
	);
};
