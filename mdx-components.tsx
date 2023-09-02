import clsx from "clsx";
import { STRIKED, ANIMATE, HYPERLINK } from "./constants";
import Link from "next/link";
import React from "react";
import { Hoverable } from "./store/Hoverable";
import { LINK_ICON } from "./constants";
import {
	PaperplaneFill,
	ArrowshapeTurnUpRightFill,
	PlayFill,
} from "./components/icons";

export const useMDXComponents = () => {
	return {
		External: (props: any) => {
			return <PaperplaneFill props={LINK_ICON} />;
		},
		Internal: (props: any) => {
			return <ArrowshapeTurnUpRightFill props={LINK_ICON} />;
		},
		Gtfol: (props: any) => {
			return <PlayFill props={LINK_ICON} />;
		},

		a: (props: any) => {
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

		Hoverable: (props: any) => {
			return (
				<Hoverable display={props.children} hovertext={props.navtext} />
			);
		},
		em: (props: any) => {
			return <span className="italic" {...props} />;
		},
		strong: (props: any) => {
			return (
				<strong
					className="font-500 text-isSystemLightSecondary"
					{...props}
				/>
			);
		},
		li: (props: any) => {
			return (
				<div
					className={clsx(
						"ml-4 md:ml-8 before:content-['--_'] w-fit hover:bg-isWhite/10 backdrop-blur-md"
					)}
					{...props}
				/>
			);
		},
		ul: (props: any) => {
			return <div className="" {...props} />;
		},
		Blur: (props: any) => {
			return <span className="blur-[0.1rem] " />;
		},
		Strike: (props: any) => {
			return <span className={clsx(STRIKED)} {...props} />;
		},
		Hide: (props: any) => {
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

		Para: (props: any) => {
			return (
				<div className="static -mb-6 -ml-6 md:-mb-12 md:-ml-14 text-isSystemLightTertiary top-0 left-0 text-3xl md:text-7xl font-400">
					¶
				</div>
			);
		},
		Section: (props: any) => {
			return (
				<div className="static -mb-7 -ml-6 md:-mb-[4.2rem] md:-ml-14 text-isSystemLightTertiary top-0 left-0 text-4xl md:text-8xl font-400">
					§
				</div>
			);
		},
		Hash: (props: any) => {
			return (
				<div className="static -mb-6 -ml-6 md:-mb-12 md:-ml-14 text-isSystemLightTertiary top-0 left-0 text-3xl md:text-7xl font-400">
					#
				</div>
			);
		},
		Phrase: (props: any) => {
			return (
				<div className="static -mb-6 -ml-6 md:-mb-12 md:-ml-14 text-isSystemLightTertiary top-0 left-0 text-3xl md:text-7xl font-400">
					&amp;
				</div>
			);
		},
		At: (props: any) => {
			return (
				<div className="static -mb-6 -ml-7 md:-mb-12 md:-ml-[4.2rem] text-isSystemLightTertiary top-0 left-0 text-2xl md:text-6xl font-400">
					@
				</div>
			);
		},
		Asterisk: (props: any) => {
			return (
				<div className="static -mb-9 -ml-7 md:-mb-[4.5rem] md:-ml-[3.6rem] text-isSystemLightTertiary top-0 left-0 text-5xl md:text-8xl font-400">
					*
				</div>
			);
		},
		Question: (props: any) => {
			return (
				<div className="static -mb-7 -ml-6 md:-mb-16 md:-ml-[3.3rem] text-isSystemLightTertiary top-0 left-0 text-4xl md:text-8xl font-400">
					?
				</div>
			);
		},
		StartQuotes: (props: any) => {
			return (
				<div className="static -mb-10 -ml-7 md:-mb-28 md:-ml-16 text-isSystemLightTertiary top-0 left-0 text-5xl md:text-9xl font-400">
					“
				</div>
			);
		},
		EndQuotes: (props: any) => {
			return (
				<div className="static -mt-3 -mr-7 md:-mt-8 md:-mr-16 -mb-3 md:-mb-20 text-isSystemLightTertiary bottom-0 right-0 text-5xl md:text-9xl font-400 text-right">
					”
				</div>
			);
		},
	};
};
