import clsx from "clsx";
import _subtitle from "@/content/home/_subtitle.mdx";

export const Subtitle = ({ props }: { props: string }) => {
	return (
		<div
			className={clsx(
				"flex flex-col items-center w-fit max-w-sm sm:max-w-md md:max-w-4xl relative bg-isWhite/10 backdrop-blur-sm px-1 md:px-2 rounded-sm md:rounded-md",
				props
			)}
		>
			<span className="text-isSystemLightSecondary text-center text-[0.6rem] md:text-xl tracking-wide italic font-300 leading-snug md:leading-normal drop-shadow-sm">
				<_subtitle />
			</span>

			<div className="px-1 absolute text-isSystemLightSecondary/50 -top-2 -left-6 md:-top-3 md:-left-11 text-xl md:text-6xl italic font-800 md:font-300">
				“
			</div>
			<div className="px-1 absolute text-isSystemLightSecondary/50 top-1 -right-5 md:top-4 md:-right-7 text-xl md:text-6xl italic font-800 md:font-300">
				”
			</div>
		</div>
	);
};
