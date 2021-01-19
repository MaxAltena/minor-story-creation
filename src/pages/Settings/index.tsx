import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BookWrapper } from "@/components";
import { changeColor, changeLocation, changeName, changeYear, initialAppState, State } from "@/redux";
import { theme } from "@/styles";

export const Settings = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();
	const oldApp = initialAppState;

	if (oldApp.name === "") oldApp.name = app.name;
	if (oldApp.location === "") oldApp.location = app.location;
	if (oldApp.year === new Date().getFullYear() + 35) oldApp.year = app.year;

	return (
		<BookWrapper
			left={
				<>
					<h2>Settings</h2>
					<p data-first>
						Wanting to change your <mark>name</mark>, <mark>location</mark> or the <mark>year</mark> the
						story takes place in? You came to the right place to do so.
					</p>
					<p>Changing these settings can be done anytime but doesn&apos;t affect any past choices.</p>
					<div className="card" style={{ border: `2px solid ${app.color}` }}>
						<div className="card-left">
							<strong>Name:</strong>
							<strong>Location:</strong>
							<strong>Year:</strong>
						</div>
						<div className="card-right">
							<span className="styled">
								{oldApp.name !== app.name ? (
									<>
										<s>{oldApp.name}</s>
										<sup>{app.name}</sup>
									</>
								) : (
									oldApp.name
								)}
							</span>
							<span className="styled">
								{oldApp.location !== app.location ? (
									<>
										<s>{oldApp.location}</s>
										<sup>{app.location}</sup>
									</>
								) : (
									oldApp.location
								)}
							</span>
							<span className="styled">
								{oldApp.year !== app.year ? (
									<>
										<s>{oldApp.year}</s>
										<sup>{app.year}</sup>
									</>
								) : (
									oldApp.year
								)}
							</span>
						</div>
					</div>
				</>
			}
			right={
				<>
					<p>Change any settings down below to your heart&apos;s desire.</p>
					<div className="input-container">
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
					</div>
					<div className="input-container">
						<label htmlFor="location">Location</label>
						<input
							type="text"
							name="location"
							defaultValue={app.location}
							value={app.location}
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
							defaultValue={app.year !== 0 ? app.year : new Date().getFullYear() + 35}
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
				</>
			}
		/>
	);
};
