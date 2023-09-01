"use client";

import { useStore } from "@/store";

import { usePathname } from "next/navigation";

import Uday from "@/public/assets/me/uday.jpg";
import Image from "next/image";
import {
	PersonCropCircleBadgeFill,
	MagazineFill,
	EllipsisBubbleFill,
	Gmail,
	Twitter,
	Linkedin,
	PaperplaneFill,
} from "@/components/icons";
import { ANIMATE } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { useState, useEffect } from "react";

export const Navbar = () => {
	const { navtext, setNavtext, resetNavtext, navHighlight, setNavHighlight } =
		useStore();

	const pathname = usePathname();

	const NAV_ITEMS = {
		home: {
			icon: PersonCropCircleBadgeFill,
			navigate_to: "/",
			navtext: "home sweet home",
		},
		blogs: {
			icon: MagazineFill,
			navigate_to: "/blogs",
			navtext: "yeah yeah, i write sometimes",
		},
		contact: {
			icon: EllipsisBubbleFill,
			navigate_to: "/contact",
			navtext: "what's your emergency?",
		},
	};

	const SOCIAL_ITEMS = {
		gmail: {
			icon: Gmail,
			navigate_to: "/",
			props: "fill-isSystemDarkTertiary hover:fill-isRedDark",
			navtext: "uday.khokhariya@gmail.com",
		},
		linkedin: {
			icon: Linkedin,
			navigate_to: "/",
			props: "fill-isSystemDarkTertiary hover:fill-isBlueDark",
			navtext: "linkedin.com/in/yupuday",
		},
		twitter: {
			icon: Twitter,
			navigate_to: "/",
			props: "fill-isSystemDarkTertiary hover:fill-isCyanLight !-ml-[0.15rem] !p-[0.25rem] sm:!p-[0.3rem] md:!p-[0.35rem]",
			navtext: "twitter.com/@yupuday",
		},
	};

	return (
		<React.Fragment>
			<div className="sticky top-0 z-40 w-full items-center flex flex-col p-2 space-y-2">
				<div
					className={clsx(
						"flex flex-row bg-isSystemDarkSecondary rounded-md shadow-sm",
						ANIMATE
					)}
				>
					<div className="relative bg-isWhite w-fit h-full p-1 bg-opacity-10 backdrop-blur-lg drop-shadow-sm rounded-md md:rounded-md overflow-hidden flex flex-col">
						<div className="flex flex-row justify-between items-center">
							{Object.keys(NAV_ITEMS).map((NAV_ITEM) => {
								const CURR_ITEM = NAV_ITEMS[NAV_ITEM];

								return (
									<Link
										href={CURR_ITEM.navigate_to}
										key={NAV_ITEM}
										className={clsx(
											"w-6 h-6 sm:w-7 sm:h-7 md:h-8 md:w-8 relative overflow-hidden"
										)}
										onMouseOver={() => {
											setNavtext(CURR_ITEM.navtext);
											setNavHighlight(true);
										}}
										onMouseOut={() => {
											resetNavtext();
											setNavHighlight(false);
										}}
									>
										<CURR_ITEM.icon
											props={clsx(
												"w-full h-full drop-shadow-sm",
												ANIMATE,
												pathname ===
													CURR_ITEM.navigate_to
													? "fill-isWhite"
													: "fill-isGrayLightEmphasis hover:fill-isWhite"
											)}
										/>
									</Link>
								);
							})}
						</div>
					</div>

					<div className="relative  w-fit h-full p-1 bg-opacity-20 backdrop-blur-lg drop-shadow-sm rounded-md md:rounded-md overflow-hidden flex flex-col">
						<div className="flex flex-row justify-between items-center">
							{Object.keys(SOCIAL_ITEMS).map((NAV_ITEM) => {
								const CURR_ITEM = SOCIAL_ITEMS[NAV_ITEM];

								return (
									<Link
										href={CURR_ITEM.navigate_to}
										key={NAV_ITEM}
										className={clsx(
											"w-6 h-6 sm:w-7 sm:h-7 md:h-8 md:w-8 relative overflow-hidden"
										)}
										onMouseOver={() => {
											setNavtext(CURR_ITEM.navtext);
											setNavHighlight(true);
										}}
										onMouseOut={() => {
											resetNavtext();
											setNavHighlight(false);
										}}
									>
										<CURR_ITEM.icon
											props={clsx(
												"w-full h-full drop-shadow-sm p-[0.2rem] sm:p-[0.25rem] md:p-[0.3rem]",
												ANIMATE,
												CURR_ITEM.props,
												pathname ===
													CURR_ITEM.navigate_to
													? "fill-isWhite"
													: "fill-isGrayLightEmphasis hover:fill-isWhite"
											)}
										/>
									</Link>
								);
							})}
						</div>
					</div>
				</div>

				<div
					className={clsx(
						"w-fit max-w-sm h-fit flex flex-row items-center justify-between leading-none pt-[0.25rem] pb-[0.26rem] font-500 text-sm md:text-md px-[0.6rem] rounded-sm shadow-sm hover:bg-isSystemLightPrimary hover:text-isSystemDarkPrimary backdrop-blur-sm",
						ANIMATE,
						navHighlight
							? "bg-isSystemLightPrimary/10 text-isLabelDarkPrimary scale-[1.1]"
							: "bg-isSystemLightTertiary/10 text-isLabelDarkSecondary"
					)}
				>
					<div className="text-ellipsis truncate">{navtext}</div>

					{/* <div className="shrink-0 ml-1 w-4 flex flex-col items-center overflow-hidden">
						<PaperplaneFill props="w-full h-full fill-isBlack" />
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};
