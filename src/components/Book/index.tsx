import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { changeColor, changeLocation, changeName, changeYear, initialAppState, KnowledgeType, State } from "@/redux";
import { theme } from "@/styles";
import {
	StyledChapterTitle,
	StyledInputContainer,
	StyledInputGroup,
	StyledParagraph,
	StyledParagraphFirst,
	StyledRadioButton,
	StyledCard,
	StyledCardLeft,
	StyledCardRight,
	StyledSpan,
	StyledCardChapter,
} from "./styles";

// Inspired by https://codepen.io/erinesullivan/pen/gxdbzp

export const Book = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const story = useSelector((state: State) => state.story);
	const location = useSelector((state: State) => state.router.location);
	const dispatch = useDispatch();
	const oldApp = initialAppState;

	const _handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		// eslint-disable-next-line
		// @ts-ignore
		const elementsArray = [...event.target.elements];
		const formData = elementsArray.reduce((array, element) => {
			if (element.name) array[element.name] = element.value;
			return array;
		}, {});

		if (formData.name) dispatch(changeName(String(formData.name)));
		if (formData.location) dispatch(changeLocation(String(formData.location)));
		if (formData.year) dispatch(changeYear(Number(formData.year)));

		if (formData.name) dispatch(push("/story"));
	};

	switch (location.pathname) {
		default:
		case "/getting-started":
			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Getting started</StyledChapterTitle>
							<StyledParagraphFirst>
								Welcome to my <mark>story creation</mark> project. I,{" "}
								<a href="https://maxaltena.com/" target="_blank" rel="noopener noreferrer">
									Max Altena
								</a>
								, worked out a story with the possible future you in it called{" "}
								<mark>&apos;Detoxers&apos;</mark>.
							</StyledParagraphFirst>
							<StyledParagraph>
								Don&apos;t forget; any and all choices are final, just like your actual choices in life.
								(Most of the time)
							</StyledParagraph>
							<dl>
								<dt>
									<strong>de&bull;tox&bull;er</strong>
								</dt>
								<dd>
									<em>noun</em>
									<br />a person on detox; somebody attempting to give up drugs or{" "}
									<i>other unhealthy substances</i>
								</dd>
							</dl>
						</>
					}
					right={
						<>
							<StyledParagraph>
								To get started, fill in the details down below to start choosing your future.
							</StyledParagraph>
							<form onSubmit={_handleSubmit}>
								<StyledInputContainer>
									<label htmlFor="name">Name</label>
									<input
										type="text"
										name="name"
										autoComplete="name"
										required
										defaultValue={app.name}
									/>
								</StyledInputContainer>
								<StyledInputContainer>
									<label htmlFor="location">Location</label>
									<input
										type="text"
										name="location"
										value={app.location}
										defaultValue={app.location}
										onChange={event => dispatch(changeLocation(event.target.value))}
										required
									/>
								</StyledInputContainer>
								<StyledInputContainer>
									<label htmlFor="year">Year</label>
									<input
										type="number"
										name="year"
										min={new Date().getFullYear()}
										max={new Date().getFullYear() + 100}
										step="1"
										defaultValue={app.year}
										value={app.year}
										onChange={event => dispatch(changeYear(Number(event.target.value)))}
										required
									/>
								</StyledInputContainer>
								<StyledInputContainer>
									<label htmlFor="color">Accent color</label>
									<StyledInputGroup>
										<StyledRadioButton
											type="radio"
											name="color"
											value={theme.colors.books.primary}
											onChange={() => dispatch(changeColor(theme.colors.books.primary))}
											checked={app.color === theme.colors.books.primary}
										/>
										<StyledRadioButton
											type="radio"
											name="color"
											value={theme.colors.books.secondary}
											onChange={() => dispatch(changeColor(theme.colors.books.secondary))}
											checked={app.color === theme.colors.books.secondary}
										/>
										<StyledRadioButton
											type="radio"
											name="color"
											value={theme.colors.books.tertiary}
											onChange={() => dispatch(changeColor(theme.colors.books.tertiary))}
											checked={app.color === theme.colors.books.tertiary}
										/>
									</StyledInputGroup>
								</StyledInputContainer>
								<StyledInputContainer>
									<button type="submit">Start story</button>
								</StyledInputContainer>
							</form>
						</>
					}
				/>
			);
		case "/settings":
			if (oldApp.name === "") oldApp.name = app.name;
			if (oldApp.location === "") oldApp.location = app.location;
			if (oldApp.year === new Date().getFullYear() + 35) oldApp.year = app.year;

			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Settings</StyledChapterTitle>
							<StyledParagraphFirst>
								Wanting to change your <mark>name</mark>, <mark>location</mark> or the <mark>year</mark>{" "}
								the story takes place in? You came to the right place to do so.
							</StyledParagraphFirst>
							<StyledParagraph>
								Changing these settings can be done anytime but doesn&apos;t affect any past choices.
							</StyledParagraph>
							<StyledCard>
								<StyledCardLeft>
									<strong>Name:</strong>
									<strong>Location:</strong>
									<strong>Year:</strong>
								</StyledCardLeft>
								<StyledCardRight>
									<StyledSpan>
										{oldApp.name !== app.name ? (
											<>
												<s>{oldApp.name}</s>
												<sup>{app.name}</sup>
											</>
										) : (
											oldApp.name
										)}
									</StyledSpan>
									<StyledSpan>
										{oldApp.location !== app.location ? (
											<>
												<s>{oldApp.location}</s>
												<sup>{app.location}</sup>
											</>
										) : (
											oldApp.location
										)}
									</StyledSpan>
									<StyledSpan>
										{oldApp.year !== app.year ? (
											<>
												<s>{oldApp.year}</s>
												<sup>{app.year}</sup>
											</>
										) : (
											oldApp.year
										)}
									</StyledSpan>
								</StyledCardRight>
							</StyledCard>
						</>
					}
					right={
						<>
							<StyledParagraph>
								Change any settings down below to your heart&apos;s desire.
							</StyledParagraph>
							<StyledInputContainer>
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									autoComplete="name"
									defaultValue={app.name}
									value={app.name}
									onChange={event => dispatch(changeName(event.target.value))}
									required
								/>
							</StyledInputContainer>
							<StyledInputContainer>
								<label htmlFor="location">Location</label>
								<input
									type="text"
									name="location"
									defaultValue={app.location}
									value={app.location}
									onChange={event => dispatch(changeLocation(event.target.value))}
									required
								/>
							</StyledInputContainer>
							<StyledInputContainer>
								<label htmlFor="year">Year</label>
								<input
									type="number"
									name="year"
									min={new Date().getFullYear()}
									max={new Date().getFullYear() + 100}
									step="1"
									defaultValue={app.year !== 0 ? app.year : new Date().getFullYear() + 35}
									value={app.year}
									onChange={event => dispatch(changeYear(Number(event.target.value)))}
									required
								/>
							</StyledInputContainer>
							<StyledInputContainer>
								<label htmlFor="color">Accent color</label>
								<StyledInputGroup>
									<StyledRadioButton
										type="radio"
										name="color"
										value={theme.colors.books.primary}
										onChange={() => dispatch(changeColor(theme.colors.books.primary))}
										checked={app.color === theme.colors.books.primary}
									/>
									<StyledRadioButton
										type="radio"
										name="color"
										value={theme.colors.books.secondary}
										onChange={() => dispatch(changeColor(theme.colors.books.secondary))}
										checked={app.color === theme.colors.books.secondary}
									/>
									<StyledRadioButton
										type="radio"
										name="color"
										value={theme.colors.books.tertiary}
										onChange={() => dispatch(changeColor(theme.colors.books.tertiary))}
										checked={app.color === theme.colors.books.tertiary}
									/>
								</StyledInputGroup>
							</StyledInputContainer>
						</>
					}
				/>
			);
		case "/story":
			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Detoxers</StyledChapterTitle>
							<StyledParagraphFirst>
								The story starts here: your central hub of information. You have the knowledge at your
								disposal that you&apos;ve experienced and gathered throughout the story.
							</StyledParagraphFirst>
							<StyledCardChapter>
								{story.chapter === 1 ? (
									<>
										<p>Start with your first chapter</p>
										<Link to={`/chapter-${story.chapter}`}>Chapter {story.chapter}</Link>
									</>
								) : (
									<>
										<p>Next up</p>
										<Link to={`/chapter-${story.chapter}`}>Chapter {story.chapter}</Link>
									</>
								)}
							</StyledCardChapter>
						</>
					}
					right={
						<>
							<StyledParagraph>
								Getting knowledgable is doable through experiencing the story of{" "}
								<strong>{app.name}</strong>. For now, you&apos;ve collected the following knowledge:
							</StyledParagraph>
							<ul>
								{Object.entries(story.knowledge).map(
									(value: [string, Array<string>], index: number) => {
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
												<li key={index}>{header} knowledge</li>
												<ul>
													{value[1].map((value: string, index: number) => (
														<li key={index}>{value}</li>
													))}
												</ul>
											</>
										);
									}
								)}
							</ul>
						</>
					}
				/>
			);
		case "/chapter-1":
		case "/chapter-2":
		case "/chapter-3":
			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Chapter 1: Introduction</StyledChapterTitle>
							<StyledParagraphFirst>
								A diary you experience with Charlie, the main character within the story. You will get
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

	{
		/*<StyledContainer>
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
			</StyledContainer>*/
	}
};

export default Book;
