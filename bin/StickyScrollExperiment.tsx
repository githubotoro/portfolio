"use client";

import Image from "next/image";
import clsx from "clsx";
import { ANIMATE } from "@/constants";
import { useEffect } from "react";

export const StickyScrollExperiment = () => {
	if (process.browser) {
		let maskedWrapper =
			document.getElementsByClassName("masked-wrapper")[0];
		let maskedContent =
			document.getElementsByClassName("masked-content")[0];

		window.onscroll = () => {
			let scrollTop = window.scrollY;
			let viewportHeight = window.innerHeight;
			let contentHeight = maskedContent.getBoundingClientRect().height;

			if (scrollTop >= contentHeight - viewportHeight) {
				maskedWrapper.style.position = "fixed";
			} else {
				maskedWrapper.style.position = "";
			}
		};
	}

	return (
		<>
			<div
				id="tagline"
				className="font-500 rounded-2xl w-full max-w-4xl text-isSystemLightTertiary text-[1.8rem] md:text-[5.2rem] flex flex-col space-y-1 md:space-y-3 leading-none font-serif text-center py-2 md:py-5"
			>
				<div className="flex flex-row items-center place-content-center">
					<span className="blur-[0.1rem]">The</span>&nbsp;
					<span className="text-isWhite">goal</span>
					<span
						className={clsx(
							"relative overflow-hidden w-[2.3rem] h-[3.2rem] md:w-[4.3rem] md:h-[6.2rem] mx-2 md:mx-5 rounded-xl md:rounded-2xl hover:scale-[1.5] hover:-rotate-6",
							ANIMATE
						)}
					>
						<Image
							src="/assets/me/goal.jpg"
							alt="me"
							fill
							className="object-cover scale-150"
						/>
					</span>
					<span className="blur-[0.1rem]">{` is to`}</span>&nbsp;
					<span className="text-isWhite">go</span>
				</div>
				<div className="flex flex-row items-center place-content-center md:!mt-[1.6rem]">
					<span className="blur-[0.1rem]">like</span>
					<span
						className={clsx(
							"relative overflow-hidden mx-2 rounded-xl w-[2.4rem] h-[2.4rem] md:w-[4.8rem] md:h-[4.8rem] md:mx-5 md:rounded-2xl hover:blur-none hover:scale-[1.5] hover:rotate-6",
							ANIMATE
						)}
					>
						<Image
							src="/assets/me/like.png"
							alt="me"
							fill
							className="object-cover"
						/>
					</span>
					<span className="blur-[0.1rem]">Willie Nelson,</span>
				</div>
				<div className="flex flex-row items-center place-content-center text-isWhite">
					<span className="blur-[0.1rem]">on&nbsp;a&nbsp;</span>
					<span className="text-isWhite">high...</span>
					<span
						className={clsx(
							"relative overflow-hidden w-[4.5rem] h-[2.5rem] md:w-[9.2rem] md:h-[5.6rem] mx-2 md:mx-5 rounded-xl md:rounded-2xl hover:scale-[1.5] hover:-rotate-6",
							ANIMATE
						)}
					>
						<Image
							src="/assets/me/high.png"
							alt="me"
							fill
							className="object-cover"
						/>
					</span>
				</div>
			</div>

			<div className="w-full relative flex flex-col items-center max-w-7xl">
				<div className="masked-wrapper w-full h-36 bg-isRedDark z-10"></div>

				<div className="masked-content w-full absolute flex flex-col items-center ">
					<div className="w-full h-screen bg-isMintDark"></div>
					<div className="w-full h-screen bg-isBlueDark"></div>
				</div>
			</div>

			<div className="text-isLabelDarkSecondary text-2xl py-5">¶</div>

			<div className="text-isSystemLightTertiary text-lg w-full max-w-screen-md text-center py-5"></div>
		</>
	);
};
