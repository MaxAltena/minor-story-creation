import styled from "styled-components";

import type { StyledContainerProps, StyledFullpageContainerProps } from "./types";

export const StyledContainer = styled.div<StyledContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	svg.book-shelf {
		${props => (props.speedMultiplier ? `--speed-multiplier: ${props.speedMultiplier};` : `--speed-multiplier: 1;`)}

		@keyframes book-bounce {
			0% {
				transform: translateY(0);
			}
			40% {
				transform: translateY(-10px);
			}
			80% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(0);
			}
		}

		.book {
			animation: book-bounce calc(1000ms * var(--speed-multiplier)) ease infinite;
		}

		.book-two {
			animation-delay: calc(100ms * var(--speed-multiplier));
		}

		.book-three {
			animation-delay: calc(200ms * var(--speed-multiplier));
		}
	}
`;

export const StyledFullpageContainer = styled.div<StyledFullpageContainerProps>`
	user-select: none;
	-webkit-user-drag: none;
	pointer-events: none;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${({ backgroundColor }) => backgroundColor};
`;
