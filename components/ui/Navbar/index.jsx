"use client";

import React from "react";
import { NavHighlighter } from "./NavHighlighter";
import { NavIcons } from "./NavIcons";

export const Navbar = () => {
	return (
		<React.Fragment>
			<div className="sticky top-0 z-40 w-full items-center flex flex-col p-2 space-y-2">
				<NavIcons />

				<NavHighlighter />
			</div>
		</React.Fragment>
	);
};
