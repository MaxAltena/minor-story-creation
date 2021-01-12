import styled from "styled-components";

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

export const StyledContainerSide = styled.div`
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 28.125em;
	height: 100%;
	overflow: hidden;
`;
