import React from "react";
import { useStore } from ".";

export const Hoverable = ({ display, hovertext }) => {
	const { navtext, setNavtext, resetNavtext, setNavHighlight } = useStore();

	return (
		<span
			onMouseOver={() => {
				setNavtext(hovertext);
				setNavHighlight(true);
			}}
			onMouseOut={() => {
				resetNavtext();
				setNavHighlight(false);
			}}
		>
			{display}
		</span>
	);
};
