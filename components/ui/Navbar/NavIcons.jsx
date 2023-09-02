import Link from "next/link";
import { NAV_ITEMS, SOCIAL_ITEMS } from "./Items";
import { ANIMATE } from "@/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useStore } from "@/store";

export const NavIcons = () => {
	const pathname = usePathname();

	const { setNavtext, resetNavtext, setNavHighlight } = useStore();

	return (
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
										pathname === CURR_ITEM.navigate_to
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
							<a
								target="_blank"
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
										"w-full h-full drop-shadow-sm p-[0.2rem] sm:p-[0.25rem] md:p-[0.3rem] fill-isGrayLightEmphasis",
										ANIMATE,
										CURR_ITEM.props
									)}
								/>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};
