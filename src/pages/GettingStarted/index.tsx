import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { BookWrapper } from "@/components";
import { addKnowledge, changeColor, changeLocation, changeName, changeYear, State } from "@/redux";
import { theme } from "@/styles";
import { playAudioFile } from "@/utils";

export const GettingStarted = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

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

	return (
		<BookWrapper
			left={
				<>
					<h2>Getting started</h2>
					<p data-first>
						Welcome to my <mark>story creation</mark> project. I,{" "}
						<a href="https://maxaltena.com/" target="_blank" rel="noopener noreferrer">
							Max Altena
						</a>
						, worked out a story with the possible future you in it called{" "}
						<mark
							style={{ cursor: "help" }}
							onClick={() => dispatch(addKnowledge("Detoxers. Seems like a special term.", "general"))}
						>
							&apos;Detoxers&apos;
						</mark>
						.
					</p>
					<p>
						Don&apos;t forget; any and all choices are final, just like your actual choices in life. (Most
						of the time)
					</p>
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
										addKnowledge("Substances are king. A single one in particular.", "general")
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
					<p>To get started, fill in the details down below to start choosing your future.</p>
					<form onSubmit={_handleSubmit}>
						<div className="input-container">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" autoComplete="name" required defaultValue={app.name} />
						</div>
						<div className="input-container">
							<label htmlFor="location">Location</label>
							<input
								type="text"
								name="location"
								value={app.location}
								defaultValue={app.location}
								onChange={event => dispatch(changeLocation(event.target.value))}
								required
							/>
						</div>
						<div className="input-container">
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
						</div>
						<div className="input-container">
							<label htmlFor="color">Accent color</label>
							<div className="input-group">
								<input
									className="radio"
									type="radio"
									name="color"
									value={theme.colors.books.primary}
									style={{ background: theme.colors.books.primary }}
									onChange={() => dispatch(changeColor(theme.colors.books.primary))}
									checked={app.color === theme.colors.books.primary}
								/>
								<input
									className="radio"
									type="radio"
									name="color"
									value={theme.colors.books.secondary}
									style={{ background: theme.colors.books.secondary }}
									onChange={() => dispatch(changeColor(theme.colors.books.secondary))}
									checked={app.color === theme.colors.books.secondary}
								/>
								<input
									className="radio"
									type="radio"
									name="color"
									value={theme.colors.books.tertiary}
									style={{ background: theme.colors.books.tertiary }}
									onChange={() => dispatch(changeColor(theme.colors.books.tertiary))}
									checked={app.color === theme.colors.books.tertiary}
								/>
							</div>
						</div>
						<div className="input-container">
							<button type="submit" onClick={() => playAudioFile("page-flip")}>
								Start story
							</button>
						</div>
					</form>
				</>
			}
		/>
	);
};
