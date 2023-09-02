import { ANIMATE } from "@/constants";
import clsx from "clsx";

import { useStore } from "@/store";
import { useEffect } from "react";

export const NavHighlighter = () => {
	const { navHighlight, navtext, flashEffect, setFlashEffect } = useStore();

	useEffect(() => {
		const flashEffect = async () => {
			setFlashEffect(true);

			setTimeout(() => {
				setFlashEffect(false);
			}, 100);
		};

		flashEffect();
	}, [navHighlight]);

	return (
		<div
			className={clsx(
				"w-fit max-w-sm h-fit flex flex-row items-center justify-between leading-none pt-[0.25rem] pb-[0.26rem] font-500 text-sm md:text-md px-[0.6rem] rounded-sm shadow-sm hover:bg-isSystemLightPrimary hover:text-isSystemDarkPrimary backdrop-blur-sm drop-shadow-sm",
				ANIMATE,
				navHighlight
					? flashEffect
						? "bg-isSystemLightPrimary text-isSystemDarkPrimary"
						: "bg-isSystemLightPrimary/10 text-isLabelDarkPrimary scale-[1.1]"
					: "bg-isSystemLightTertiary/10 text-isLabelDarkSecondary"
			)}
		>
			<div className="text-center">{navtext}</div>

			{/* <div className="text-ellipsis truncate">{navtext}</div> */}

			{/* <div className="shrink-0 ml-1 w-4 flex flex-col items-center overflow-hidden">
						<PaperplaneFill props="w-full h-full fill-isBlack" />
					</div> */}
		</div>
	);
};
