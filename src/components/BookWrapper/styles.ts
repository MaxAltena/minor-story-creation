import styled from "styled-components";

import type { StyledAccentProps } from "./types";

export const StyledContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	background: white;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 4em 5em;
	font-family: ${({ theme }) => theme.font};
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 6em;

	header,
	footer {
		position: fixed;
		box-sizing: border-box;
		padding: 0.25em 1em;
		left: 6.5em;
		right: 6.5em;
		z-index: 101;
		font-size: 0.75em;
		line-height: 1.25em;

		display: flex;
		justify-content: space-between;
		align-items: center;

		> * {
			margin: 0;
			padding: 0;
		}

		h1 {
			font-size: 1em;
		}

		a {
			font-size: 1em;
			padding-bottom: 0.25em;
		}
	}

	header {
		top: 3em;
	}

	footer {
		bottom: 3em;
	}
`;

export const StyledContainerSide = styled.div<StyledAccentProps>`
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 28.125em;
	height: 100%;
	overflow: hidden;

	a[data-link] {
		display: inline-block;
		margin-top: 1em;
	}

	h2 {
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
		font-size: 2.75em;
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
	}

	p {
		color: black;
		font-size: 1.25em;
		text-align: start;
		line-height: 1.62em;
		font-weight: 400;
		font-family: ${({ theme }) => theme.font};
		text-indent: 2em;

		&[data-first] {
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
		}

		&[data-center] {
			text-indent: 0;
			text-align: center;
		}

		&[data-margin] {
			margin: 0.5em 0;
		}
	}

	div {
		&.input-container {
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
				margin-top: 0.5em;
				cursor: pointer;
				border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};

				background: none;
				border: none;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-grow: 1;
				min-width: 5em;
				padding: 0.75em;
				box-shadow: inset 0 0 0 0.2em ${({ accent }) => accent};
				font-weight: bold;
				transition: box-shadow ease-in-out 200ms;

				&:hover,
				&:focus,
				&:active {
					box-shadow: inset 0 0 0 0.4em ${({ accent }) => accent};
				}
			}
		}

		&.input-group {
			display: flex;
			align-items: center;

			> * {
				margin: 0 0.25em;
			}
		}

		&.card {
			border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
			width: calc(100% - 6em);
			margin: 1em 2em;
			padding: 1em;
			height: auto;
			display: flex;

			&[data-chapter] {
				justify-content: space-between;
				padding: 0;

				p {
					text-indent: 0;
					padding: 1em;
					font-size: 1em;
				}

				a {
					background: none;
					border-left: 2px solid ${({ accent }) => accent};
					display: inline-flex;
					justify-content: center;
					align-items: center;
					flex-grow: 1;
					min-width: 5em;
					padding: 1em;
					box-shadow: inset 0 0 0 0.2em ${({ accent }) => accent};
					font-weight: bold;
					transition: box-shadow ease-in-out 200ms;
					min-height: 100%;

					&:hover,
					&:focus,
					&:active {
						box-shadow: inset 0 0 0 0.4em ${({ accent }) => accent};
					}
				}
			}
		}

		&.card-left {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 6em;
			line-height: 2em;
		}

		&.card-right {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: auto;
			line-height: 2em;
			flex-grow: 1;
		}

		&.row {
			display: flex;
			justify-content: space-between;
			gap: 4em;

			> a {
				text-align: center;
				line-height: 1.2em;
				background: none;
				border-radius: 0.25em;
				padding: 0.5em;
				box-shadow: inset 0 0 0 0.1em ${({ accent }) => accent};
				transition: box-shadow ease-in-out 200ms;

				&:hover,
				&:focus,
				&:active {
					box-shadow: inset 0 0 0 0.3em ${({ accent }) => accent};
				}
			}
		}
	}

	span {
		&.styled {
			position: relative;
			min-width: 12em;
		}
	}

	input {
		&.radio {
			appearance: none;
			border: 2px solid rgba(0, 0, 0, 0.75);
			border-radius: ${({ theme }) => theme.borderRadius.DEFAULT};
			width: 50px;
			height: 50px;
			transition: box-shadow ease-in-out 200ms;

			&:checked {
				box-shadow: inset 0 0 0 0.35em rgba(0, 0, 0, 0.75);
			}
		}
	}
`;
