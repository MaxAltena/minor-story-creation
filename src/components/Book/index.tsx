import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import { BookWrapper } from "@/components";
import type { State } from "@/redux";
import { StyledChapterTitle, StyledParagraph, StyledParagraphFirst } from "./styles";

// Inspired by https://codepen.io/erinesullivan/pen/gxdbzp

export const Book = (): ReactElement => {
	const location = useSelector((state: State) => state.router.location);

	switch (location.pathname) {
		case "/getting-started":
			console.log("getting started");
			break;
		case "/settings":
			console.log("settings");
			break;
		default:
			console.log("story path");

			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Detoxers</StyledChapterTitle>
							<StyledParagraphFirst>
								A dairy you experience with Charlie, the main character within the story. You will get
								to know what people in the future fight for and some want to live for.
							</StyledParagraphFirst>
						</>
					}
					right={
						<>
							<StyledParagraph>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem repellat a
								eius similique illo atque labore nesciunt sequi id autem fugiat eum esse eaque, nihil
								tenetur culpa! Non, illo!
							</StyledParagraph>
						</>
					}
				/>
			);
	}

	return (
		<>
			<BookWrapper
				left={
					<>
						<StyledChapterTitle>Detoxers</StyledChapterTitle>
						<StyledParagraphFirst>
							A dairy you experience with Charlie, the main character within the story. You will get to
							know what people in the future fight for and some want to live for.
						</StyledParagraphFirst>
					</>
				}
				right={
					<>
						<StyledParagraph>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem repellat a eius
							similique illo atque labore nesciunt sequi id autem fugiat eum esse eaque, nihil tenetur
							culpa! Non, illo!
						</StyledParagraph>
					</>
				}
			/>
			{/*<StyledContainer>
				<section className="book">
					 <header>
					<h1>Story Creation - Max Altena</h1>
					<h6>{name}</h6>
				</header>
				<article>
					<p>
						To <a href="https://codepen.io/">CodePen.io</a> she went, but not brainlessly! Erin "Oohed" and
						"Ahhed" at the recently picked pens. She envied the skills of those using compilers she has yet
						to dabble in. Then she put together a list of what she would like to achieve.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda harum, provident ipsa cumque
						saepe sunt enim dolore? Unde cum consequatur temporibus aliquam? Provident assumenda vero
						dignissimos incidunt, ex quidem minus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda harum, provident ipsa cumque
						saepe sunt enim dolore? Unde cum consequatur temporibus aliquam? Provident assumenda vero
						dignissimos incidunt, ex quidem minus.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda harum, provident ipsa cumque
						saepe sunt enim dolore? Unde cum consequatur temporibus aliquam? Provident assumenda vero
						dignissimos incidunt, ex quidem minus.
					</p>
					<dl>
						<dt>
							<strong>skeu&bull;o&bull;morph</strong>
						</dt>
						<dd>
							<em>noun</em>
							<br />
							an object or feature that imitates the design of a similar artifact made from another
							material.
						</dd>
					</dl>
					<p>She began to jot down a list of elements that are typically in a novel:</p>
					<ul>
						<li>Serif typefaces</li>
						<li>
							Header area with the title of the book on the left, and the author of said book on the
							right.{" "}
							<em>
								Erin is aware that content within the header of the same page as a chapter title does
								not Bookear, but she made an exception
							</em>
							.
						</li>
						<li>An adorned chapter title</li>
						<li>A dropcap for the first letter of the first paragraph of the chapter</li>
						<li>Indented paragraphs</li>
						<li>Page numbers</li>
					</ul>
					<p>
						She was then picturing herself making marks on a novel like she used to in school. In her true
						fashion, she got carried away with "What ifs."
					</p>
					<ul>
						<li>
							"What if highlighting the text actually looked <mark>like a highlighter</mark>?"
							<ul>
								<li>
									"What if I wanted it to be <mark className="pink">pink</mark>?"
								</li>
								<li>
									"<mark className="blue">Blue</mark>?"
								</li>
								<li>
									"<mark className="green">Green</mark>?"
								</li>
								<li>
									"<mark className="orange">Orange</mark>?"
								</li>
							</ul>
						</li>
						<li>
							"What if I found <s>a typo</s>
							<sup>an error in the content</sup> and wanted to make a correction?"
						</li>
						<li>"What if I was viewing this on mobile&mdash;"</li>
					</ul>
					<p>The true obstacle showed its form. Responsiveness. How on Earth will she make this work?</p>
					<p>
						Erin pulled out her notepad and started sketching. First she began to illustrate the wireframe
						of the book in its entirety. Then she recorded some notes on how each element would break down
						as the screen size got smaller. After several minutes, the blueprint was complete. She came to
						the conclusion that mobile viewing must stay minimal. The pages go away, which makes the page
						numbers no longer have a function so they must go away, and if those go away then there is no
						need for a cover since it is used to help hold and protect pages.
					</p>
					<p>
						She looks back at the blinking cursor of her blank canvas in Sublime Text 2. Doubt begins to
						linger in the back of her mind with the thought of her new code never being used and her time
						spent ends up being a waste. Her fingers were typing anyway.
					</p>
					<p>Erin smirked, "Well at least I think it's worth a try."</p>
				</article>
				<footer>
					<ol id="page-numbers">
						<li>1</li>
						<li>2</li>
					</ol>
				</footer>
				</section>
			</StyledContainer>*/}
		</>
	);
};

export default Book;
