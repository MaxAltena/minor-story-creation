import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

import { State, changeUID } from "@/redux";
import { Book, FullpageLoader } from "@/components";
import type { Props } from "./types";
import { StyledMotionP } from "./styles";

export const App = ({ bootstrapped }: Props): ReactElement => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const app = useSelector((state: State) => state.app);
	const location = useSelector((state: State) => state.router.location);
	const dispatch = useDispatch();

	useEffect(() => {
		if (bootstrapped && location) {
			if (
				(location.pathname === "/" || location.pathname === "/story" || location.pathname === "/settings") &&
				app.name === "" &&
				app.location === "The Netherlands" &&
				app.year === new Date().getFullYear() + 35
			)
				dispatch(push("/getting-started"));
		}

		if (bootstrapped && app.uid === "") dispatch(changeUID(uuid()));
		else if (bootstrapped) setTimeout(() => setLoaded(true), 1000);
		else setLoaded(bootstrapped);
	}, [bootstrapped, app, location]);

	return (
		<>
			<motion.div
				initial={false}
				animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? "none" : "auto" }}
				transition={{ duration: 0.5 }}
			>
				<FullpageLoader sizeMultiplier={2} speedMultiplier={0.75} backgroundColor="#101010">
					<StyledMotionP
						initial={false}
						animate={{ opacity: app.uid ? 0 : 1 }}
						transition={{ duration: 0.5 }}
					>
						Loading Detoxers...
					</StyledMotionP>
					<StyledMotionP
						initial={false}
						animate={{ opacity: app.uid ? 1 : 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						Loading Detoxers for {app.name !== "" ? app.name : "you"}...
					</StyledMotionP>
				</FullpageLoader>
			</motion.div>

			<motion.div initial={false} animate={{ opacity: loaded ? 1 : 0 }} transition={{ duration: 0.5 }}>
				<Switch>
					<Route exact path="/getting-started" render={() => <Book />} />
					<Route exact path="/settings" render={() => <Book />} />
					<Route exact path="/story" render={() => <Book />} />
					<Route path="/:chapter" render={() => <Book />} />
					<Route render={() => <Book />} />
				</Switch>
			</motion.div>
		</>
	);
};

export default App;
