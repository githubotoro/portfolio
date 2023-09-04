import clsx from "clsx";
import { STRIKED, ANIMATE, HYPERLINK, FRONT_ADJUSTMENT } from "./constants";
import Link from "next/link";
import React from "react";
import { Hoverable } from "./store/Hoverable";
import { LINK_ICON } from "./constants";
import {
	PaperplaneFill,
	ArrowshapeTurnUpRightFill,
	PlayFill,
} from "./components/icons";
import { Symbols } from "./mdx/Symbols";

export const useMDXComponents = () => {
	return {
		External: (props) => {
			return <PaperplaneFill props={LINK_ICON} />;
		},
		Internal: (props) => {
			return <ArrowshapeTurnUpRightFill props={LINK_ICON} />;
		},
		Gtfol: (props) => {
			return <PlayFill props={LINK_ICON} />;
		},

		a: (props) => {
			const href = props.href;

			if (href.startsWith("/")) {
				return (
					<Link
						className={clsx(HYPERLINK, ANIMATE)}
						href={href}
						{...props}
					>
						{props.children}
					</Link>
				);
			} else if (href.startsWith("#")) {
				return (
					<div className="flex flex-row items-center cursor-pointer group">
						<div className="absolute left-0 -mt-[0.3rem] -ml-[1.7rem] font-sans font-black transition-all duration-300 ease-in-out opacity-0 text-isLabelDarkSecondary group-hover:opacity-100">
							#
						</div>
						<a
							className={clsx(HYPERLINK, ANIMATE)}
							target="_self"
							rel="noopener noreferrer"
							{...props}
						/>
					</div>
				);
			} else {
				return (
					<a
						className={clsx(HYPERLINK, ANIMATE)}
						target="_blank"
						rel="noopener noreferrer"
						{...props}
					/>
				);
			}
		},

		Hoverable: (props) => {
			return (
				<Hoverable display={props.children} hovertext={props.navtext} />
			);
		},
		em: (props) => {
			return <span className="italic" {...props} />;
		},
		strong: (props) => {
			return (
				<strong
					className="font-500 text-isSystemLightSecondary"
					{...props}
				/>
			);
		},
		li: (props) => {
			return (
				<div
					className={clsx(
						"ml-4 md:ml-8 before:content-['--_'] w-fit hover:bg-isWhite/10 backdrop-blur-md"
					)}
					{...props}
				/>
			);
		},
		ul: (props) => {
			return <div className="" {...props} />;
		},
		h1: (props) => {
			return <></>;
		},
		h2: (props) => {
			return (
				<h3
					className={clsx(
						"mt-2 text-lg md:text-2xl border-t-2 font-700 hover:text-isLabelDarkPrimary border-isSeparatorDarkTransparent pt-10 text-isSystemLightTertiary",
						ANIMATE
					)}
					{...props}
				/>
			);
		},
		h3: (props) => {
			return (
				<h4
					className="text-xl font-medium text-isLabelDarkPrimary"
					{...props}
				/>
			);
		},
		h4: (props) => {
			return (
				<h5
					className="text-lg font-medium text-isLabelDarkPrimary"
					{...props}
				/>
			);
		},

		Blur: (props) => {
			return <span className="blur-[0.1rem] " />;
		},
		Strike: (props) => {
			return <span className={clsx(STRIKED)} {...props} />;
		},
		Hide: (props) => {
			return (
				<span
					{...props}
					className={clsx(
						"blur-[0.15rem] md:blur-[0.25rem] bg-isBlack hover:blur-none text-isLabelDarkSecondary hover:bg-isBlack opacity-50 hover:opacity-100",
						ANIMATE
					)}
				/>
			);
		},

		...Symbols,
	};
};
