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
						"blur-[0.25rem] bg-isBlack hover:blur-none text-isLabelDarkSecondary hover:bg-isBlack opacity-50 hover:opacity-100",
						ANIMATE
					)}
				/>
			);
		},
	};
};
