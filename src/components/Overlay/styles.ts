import styled from "styled-components";

export const StyledOverlay = styled.div`
	box-sizing: border-box;
	background: transparent;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	user-select: none;
	-webkit-user-drag: none;
	pointer-events: none;

	.page {
		position: relative;

		&.center {
			background: linear-gradient(
				to right,
				transparent 0%,
				rgba(0, 0, 0, 0.2) 46%,
				rgba(0, 0, 0, 0.5) 49%,
				rgba(0, 0, 0, 0.6) 50%,
				rgba(0, 0, 0, 0.5) 51%,
				rgba(0, 0, 0, 0.2) 52%,
				transparent 100%
			);
			bottom: 1em;
			top: 1em;
			left: 50%;
			position: absolute;
			transform: translate(-50%, 0);
			width: 4em;
			z-index: 1;

			@media only screen and (min-width: 1860px) {
				bottom: 1.25em;
				top: 1.25em;
			}
		}

		&.border {
			position: absolute;
			background: white;

			${({ theme }) => `--border-radius: ${theme.borderRadius.DEFAULT};`}

			&.top,
			&.right,
			&.left {
				top: 2em;
			}

			&.top,
			&.left {
				border-top-left-radius: var(--border-radius);
			}

			&.top,
			&.right,
			&.bottom {
				right: 3em;
			}

			&.top,
			&.right {
				border-top-right-radius: var(--border-radius);
			}

			&.top,
			&.left,
			&.bottom {
				left: 3em;
			}

			&.bottom,
			&.right {
				border-bottom-right-radius: var(--border-radius);
			}

			&.bottom,
			&.right,
			&.left {
				bottom: 2em;
			}

			&.bottom,
			&.left {
				border-bottom-left-radius: var(--border-radius);
			}

			&.top,
			&.bottom {
				height: 1.5em;
				width: calc(100% - 6em);
			}

			&.right,
			&.left {
				width: 1.5em;
				height: calc(100% - 4em);
			}
		}

		&.curve {
			&.top,
			&.bottom {
				background: white;
				border-radius: 25%;
				height: 1.5em;
				position: absolute;
				width: calc(50% - 4em);
			}

			--rotation: 8deg;

			@media only screen and (min-width: 450px) {
				--rotation: 6deg;
			}

			@media only screen and (min-width: 600px) {
				--rotation: 4deg;
			}

			@media only screen and (min-width: 1000px) {
				--rotation: 2deg;
			}

			@media only screen and (min-width: 1860px) {
				--rotation: 1deg;
			}

			&.top {
				&.left {
					transform: rotate(calc(var(--rotation) * -1));
					right: 50%;
					top: 1.5em;
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
					border-top-left-radius: 0;
				}
				&.right {
					transform: rotate(var(--rotation));
					left: 50%;
					top: 1.5em;
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
					border-top-right-radius: 0;
				}
			}
			&.bottom {
				&.left {
					transform: rotate(var(--rotation));
					right: 50%;
					bottom: 1.5em;
					border-top-left-radius: 0;
					border-top-right-radius: 0;
					border-bottom-left-radius: 0;
				}
				&.right {
					transform: rotate(calc(var(--rotation) * -1));
					left: 50%;
					bottom: 1.5em;
					border-top-left-radius: 0;
					border-top-right-radius: 0;
					border-bottom-right-radius: 0;
				}
			}
		}
	}

	.book {
		position: absolute;
		background: ${({ theme }) => theme.colors.books.secondary};

		${({ theme }) => `--border-radius: ${theme.borderRadius.lg};`}

		&.top,
		&.right,
		&.left {
			top: 1em;
		}

		&.top,
		&.left {
			border-top-left-radius: var(--border-radius);
		}

		&.top,
		&.right,
		&.bottom {
			right: 2em;
		}

		&.top,
		&.right {
			border-top-right-radius: var(--border-radius);
		}

		&.top,
		&.left,
		&.bottom {
			left: 2em;
		}

		&.right,
		&.bottom {
			border-bottom-right-radius: var(--border-radius);
		}

		&.bottom,
		&.right,
		&.left {
			bottom: 1em;
		}

		&.left,
		&.bottom {
			border-bottom-left-radius: var(--border-radius);
		}

		&.top,
		&.bottom {
			height: 1.5em;
			width: calc(100% - 4em);
		}

		&.right,
		&.left {
			width: 1.5em;
			height: calc(100% - 2em);
		}
	}

	.background {
		position: absolute;
		background: #101010;

		&.top,
		&.right,
		&.left {
			top: 0;
		}

		&.top,
		&.right,
		&.bottom {
			right: 0;
		}

		&.top,
		&.left,
		&.bottom {
			left: 0;
		}

		&.bottom,
		&.right,
		&.left {
			bottom: 0;
		}

		&.top,
		&.bottom {
			height: 2em;
			width: 100%;
		}

		&.right,
		&.left {
			width: 3em;
			height: 100%;
		}
	}
`;
