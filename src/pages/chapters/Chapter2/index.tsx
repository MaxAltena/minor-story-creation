import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookWrapper } from "@/components";
import { changeChapter, State } from "@/redux";

export const Chapter2 = (): ReactElement => {
	const app = useSelector((state: State) => state.app);
	const dispatch = useDispatch();

	return (
		<BookWrapper
			left={
				<>
					<h2>Chapter 2: The beginning</h2>
					<p data-first>
						As you take a look at your watch, you see it turning to 7:41PM. &lsquo;He should have been here
						at 7:30PM, like we discussed, right {app.name}?&rsquo; Jessie said. You respond: &lsquo;Give him
						some time Jessie. He&apos;ll be here soon enough. Believe in him&rsquo; &lsquo;We&apos;ve got to
						move now {app.name}, the corpos could be here any minute!&rsquo; You ignore Jessie and wait
						another few minutes while she gets more anxious by the minute which passes by.
					</p>
					<p data-center data-margin>
						<i>A few minutes pass by</i>
					</p>
					<p>
						&lsquo;Ahhh, there you are John! We&apos;ve got to go fast. Give us the stuff and we&apos;ll be
						on our ways.&rsquo; Jessie said.
					</p>
				</>
			}
			right={
				<>
					<p>
						As you bring the stuff to your next patients, Jessie asks you something. She is curious why you
						gave John so much time when we knew the corpos could have been there any minute.
					</p>
					<p>
						You respond: &lsquo;As someone once told me, you need to have patience with everyone, as
						everyone is equal. No matter what.&rsquo; Jessie smiles at you; &lsquo;Classic {app.name}
						.&rsquo; While approach the door which leads to a room where the patients are at, you see get a
						bit nostalgic. It looks like the door you once came to when your family moved.
					</p>
					<p>
						As you proceed in, you see that your family is tied up by members of your gang. The Detoxers. It
						looks like you will be detoxing your very own family today.
					</p>
					<Link to="/chapter-3" onClick={() => dispatch(changeChapter(3))} data-link>
						Continue to chapter 3
					</Link>
				</>
			}
		/>
	);
};
