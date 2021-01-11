import styled from "styled-components";

export const StyledContainer = styled.div`
	box-sizing: border-box;
	background: white;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 4em 5em;
	font-family: ${({ theme }) => theme.font};
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 6em;
`;

export const StyledContainerSide = styled.div`
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 28.125em;
	height: 100%;
	overflow: hidden;
`;
