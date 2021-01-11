import { createGlobalStyle } from "styled-components";

import { theme } from "@/styles";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: ${theme.font};
		font-weight: 400;
		font-size: 1em;
		line-height: 1.62em;
	}

	*::-moz-selection{
		background: ${theme.colors.select};
	}

	*::selection {
		background: ${theme.colors.select};
	}
`;
