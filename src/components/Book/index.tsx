import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import {
	addKnowledge,
	changeChapter,
	changeColor,
	changeLocation,
	changeName,
	changeYear,
	initialAppState,
	KnowledgeType,
	State,
} from "@/redux";
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
import { playAudioFile } from "@/utils";

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
								<mark
									style={{ cursor: "help" }}
									onClick={() =>
										dispatch(addKnowledge("Detoxers. Seems like a special term.", "general"))
									}
								>
									&apos;Detoxers&apos;
								</mark>
								.
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
									<i
										style={{ cursor: "help" }}
										onClick={() =>
											dispatch(
												addKnowledge(
													"Substances are king. A single one in particular.",
													"general"
												)
											)
										}
									>
										other unhealthy substances
									</i>
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
								<StyledInputContainer accent={app.color}>
									<button type="submit" onClick={() => playAudioFile("page-flip")}>
										Start story
									</button>
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
							<StyledCard accent={app.color}>
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
							<StyledCardChapter accent={app.color}>
								{story.chapter === 1 ? (
									<>
										<p>Start with your first chapter</p>
										<Link
											to={`/chapter-${story.chapter}`}
											onClick={() => playAudioFile("page-flip")}
										>
											Chapter {story.chapter}
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
									}
								)}
							</ul>
						</>
					}
				/>
			);
		case "/chapter-1":
			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Chapter 1: Introduction</StyledChapterTitle>
							<StyledParagraphFirst>
								A diary experience with {app.name}! You are the main character within the story. You
								will get to know what people in the future fight for and some want to live for.
							</StyledParagraphFirst>
							<StyledParagraph>
								Detoxers is set in the year {app.year} where big corporations and governments,{" "}
								<span
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
									the corpos
								</span>
								, control the human population. They do this by controlling what we see and consume on
								the different medias that exist in this world.
							</StyledParagraph>
							<StyledParagraph>Corpos have encountered some resistance though</StyledParagraph>
						</>
					}
					right={
						<>
							<Link to="/chapter-2" onClick={() => dispatch(changeChapter(2))}>
								Continue to chapter 2
							</Link>
						</>
					}
				/>
			);
		case "/chapter-2":
			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Chapter 2: The beginning</StyledChapterTitle>
							<StyledParagraphFirst>First paragraph</StyledParagraphFirst>
						</>
					}
					right={
						<>
							<Link to="/chapter-3" onClick={() => dispatch(changeChapter(3))}>
								Continue to chapter 3
							</Link>
						</>
					}
				/>
			);
		case "/chapter-3":
			return (
				<BookWrapper
					left={
						<>
							<StyledChapterTitle>Chapter 3: The end?</StyledChapterTitle>
							<StyledParagraphFirst>First paragraph</StyledParagraphFirst>
						</>
					}
					right={
						<>
							<Link to="/story" onClick={() => dispatch(changeChapter(4))}>
								Continue back to story
							</Link>
						</>
					}
				/>
			);
	}
};

export default Book;
