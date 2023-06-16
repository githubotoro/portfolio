"use client";

import clsx from "clsx";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { Routes } from "./Routes";
import { ANIMATE } from "@/constants";
import Image from "next/image";

import finder from "./assets/icons/finder.png";
import Link from "next/link";

export const Navbar = () => {
	const pathname = usePathname();

	let i = 1;
	let currentPage = "";

	if (pathname.length !== 0) {
		while (i < pathname.length) {
			if (pathname[i] === "/") break;
			else currentPage += pathname[i];
			i++;
		}
	}

	return (
		<>
			<div className="top-0 h-20 w-full md:left-0 md:h-screen md:w-20 flex flex-col items-center place-content-center md:py-2 md:px-0">
				<div className="md:w-full md:h-[22rem] md:max-w-none max-w-[18rem] sm:max-w-[23rem] h-full items-center place-content-start px-2 md:px-0 md:py-2 bg-isSystemDarkTertiary rounded-b-2xl md:rounded-l-none md:rounded-r-2xl md:grid md:grid-cols-1 md:gap-2 flex flex-row space-x-2 md:space-x-0 overflow-y-scroll no-scrollbar">
					{Object.keys(Routes).map((key) => {
						return (
							<Link
								key={key}
								className="h-full md:w-full flex md:flex-row flex-col items-center justify-between md:pr-2 md:pl-0 pb-2 md:pb-0 group cursor-pointer"
								href={`/${Routes[key].id}`}
							>
								<div
									className={cx(
										"md:w-2 h-2 rounded-b-2xl md:rounded-l-none md:rounded-r-2xl",
										Routes[key].id === currentPage
											? "w-10 md:w-2 md:h-10 bg-isGreenLight"
											: "w-5 md:w-2 md:h-5 bg-isGrayDark group-hover:bg-isGrayLightEmphasis6 group-hover:w-10 md:group-hover:w-2 md:group-hover:h-10",
										ANIMATE
									)}
								></div>
								<div className="bg-transparent w-14 h-14 relative">
									<Image
										src={`/assets/icons/${Routes[key].icon}.png`}
										className={clsx(
											"scale-[1.2] group-hover:scale-[1.4]",
											ANIMATE
										)}
										fill
									/>
								</div>
							</Link>
						);
					})}

					<div className="absolute !-ml-2 md:!ml-0 w-full h-20 md:w-20 md:h-[22rem] md:max-w-none max-w-[18.05rem] sm:max-w-[23.05rem]  bg-gradient-to-r md:bg-gradient-to-b from-isSystemDarkPrimary via-transparent to-isSystemDarkPrimary pointer-events-none"></div>
				</div>
			</div>
		</>
	);
};
