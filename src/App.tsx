import React, { useState, useEffect, ReactElement } from "react";
import { Normalize } from "styled-normalize";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import "@/App.css";

export interface ParamProps {
	chapter?: string;
	story?: string;
}

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	}

	code {
		font-family: "Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
	}
`;

export const App = (): ReactElement => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => setCount(count + 1), 1000);
		return () => clearTimeout(timer);
	}, [count, setCount]);

	return (
		<>
			<Reset />
			<Normalize />
			<GlobalStyle />

			<div className="App">
				<header className="App-header">
					<p>We are still working here.</p>
					<p>
						Page has been open for <code>{count}</code> seconds.
					</p>
					<p>
						<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
							Learn React
						</a>
					</p>
				</header>
			</div>
		</>
	);
};

export default App;
