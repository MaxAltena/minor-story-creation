import styled from "styled-components";

export const StyledChapterTitle = styled.h2`
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgICA8Zz4NCiAgICAJPHBhdGggZD0iTTAsMzJMMzIsMGwzMiwzMkwzMiw2NEwwLDMyeiBNOCwzMmwyNCwyNGwyNC0yNEwzMiw4TDgsMzJ6IE0xNiwzMmwxNi0xNmwxNiwxNkwzMiw0OEwxNiwzMnogTTI0LDMybDgsOGw4LThsLTgtOEwyNCwzMnoiIC8+DQogICAgPC9nPg0KPC9zdmc+);
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 0.5em 0.5em;
	letter-spacing: 0.125em;
	margin: 0 0 1em 0;
	padding: 1em 0;
	position: relative;
	text-align: center;
	text-transform: uppercase;
	font-weight: 800;
	color: black;
	font-family: sans-serif;
	font-size: 3em;
	line-height: 1em;

	&::before,
	&::after {
		content: "";
		border: solid 0 #000;
		border-width: 0.075em 0;
		bottom: calc((0.075em / 2) * 3);
		height: 0.125em;
		position: absolute;
		width: calc(50% - (1em / 2));
	}

	&::before {
		left: 0;
	}

	&::after {
		right: 0;
	}
`;

export const StyledParagraph = styled.p`
	color: black;
	font-size: 1.25em;
	text-align: start;
	line-height: 1.62em;
	font-weight: 400;
	font-family: ${({ theme }) => theme.font};
	text-indent: 2em;
`;

export const StyledParagraphFirst = styled(StyledParagraph)`
	text-indent: 0;

	&::first-letter {
		float: left;
		font-family: sans-serif;
		font-weight: bold;
		font-size: 3em;
		line-height: 0.825em;
		padding: 0.15em 0.05em 0 0;
		text-transform: uppercase;
	}
`;

export const StyledInputContainer = styled.div`
	margin: 0.5em 0 0.5em 3em;
	max-width: 12em;
	display: flex;
	flex-direction: column;

	label {
		font-weight: 700;
	}

	input {
		padding: 0.5em;
		border: 2px solid rgba(0, 0, 0, 0.75);
		border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	}

	button {
		margin-top: 1.5em;
		cursor: pointer;
		padding: 0.5em;
		border: 2px solid rgba(0, 0, 0, 0.75);
		border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
		background: transparent;
		font-weight: 800;
	}
`;

export const StyledInputGroup = styled.div`
	display: flex;
	align-items: center;

	> * {
		margin: 0 0.25em;
	}
`;

export const StyledRadioButton = styled.input`
	appearance: none;
	border: 2px solid rgba(0, 0, 0, 0.75);
	border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	width: 50px;
	height: 50px;
	background: ${({ value }) => value};
	transition: box-shadow ease-in-out 200ms;

	&:checked {
		box-shadow: inset 0 0 0 0.35em rgba(0, 0, 0, 0.75);
	}
`;

export const StyledCard = styled.div`
	border: 2px solid rgba(0, 0, 0, 0.75);
	border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
	width: calc(100% - 6em);
	margin: 1em 2em;
	padding: 1em;
	height: auto;
	display: flex;
`;

export const StyledSpan = styled.span`
	position: relative;
	min-width: 12em;
`;

export const StyledCardLeft = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 6em;
	line-height: 2em;
`;

export const StyledCardRight = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: auto;
	line-height: 2em;
	flex-grow: 1;
`;

export const StyledCardChapter = styled(StyledCard)`
	justify-content: space-between;
	padding: 0;

	p {
		text-indent: 0;
		padding: 1em;
	}

	a {
		background: none;
		border-left: 2px solid rgba(0, 0, 0, 0.75);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		min-width: 5em;
		padding: 1em;
		box-shadow: inset 0 0 0 0.2em rgba(0, 0, 0, 0.75);
		font-weight: bold;
		transition: box-shadow ease-in-out 200ms;

		&:hover,
		&:focus,
		&:active {
			box-shadow: inset 0 0 0 0.4em rgba(0, 0, 0, 0.75);
		}
	}
`;

/*
	.book header {
		padding-bottom: 1em;
	}

	.book header *,
	.book footer * {
		font: 700 1em/1.25 "Playfair Display", sans-serif;
		letter-spacing: 0.125em;
		margin: 0;
	}

	.book header * {
		font-size: 0.75em;
		text-transform: uppercase;
	}

	.book footer {
		padding-top: 1em;
	}

	.book footer #page-numbers {
		display: none;
		list-style: none;
		padding: 0;
		text-align: left;
	}

	.book footer #page-numbers > li:last-child {
		text-align: right;
	}

	.book header > *:last-child,
	.book footer > *:last-child {
		text-align: right;
	}

	.book footer #page-numbers {
		display: block;
	}
*/
