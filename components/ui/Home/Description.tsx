import clsx from "clsx";
import Link from "next/link";
import { ANIMATE, STRIKED } from "@/constants";
import AboutMe from "@/content/home/about-me.mdx";

export const Description = ({ props }: { props: string }) => {
	return (
		<>
			<div
				className={clsx(
					"relative w-full max-w-sm sm:max-w-sm md:max-w-3xl font-400",
					props
				)}
			>
				<div className="absolute text-isSystemLightTertiary top-0 left-0 text-3xl md:text-7xl">
					¶
				</div>
				<div className="font-300 text-sm sm:text-md md:text-xl text-isLabelDarkSecondary/50 w-full text-justify space-y-12">
					<AboutMe />
				</div>
			</div>
		</>
	);
};
