import clsx from "clsx";
import _subtitle from "@/content/home/_subtitle.mdx";

export const Subtitle = ({ props }: { props: string }) => {
	return (
		<div
			className={clsx(
				"flex flex-col items-center w-fit max-w-sm sm:max-w-md md:max-w-4xl relative bg-isWhite/10 backdrop-blur-sm px-2 rounded-md",
				props
			)}
		>
			<span className="text-isSystemLightSecondary text-center text-[0.6rem] md:text-xl tracking-wide italic font-300 ">
				<_subtitle />
			</span>

			<div className="absolute text-isSystemLightSecondary -top-2 -left-5 md:-top-3 md:-left-11 text-xl md:text-6xl italic">
				“
			</div>
			<div className="absolute text-isSystemLightSecondary top-2 -right-3 md:top-4 md:-right-7 text-xl md:text-6xl italic">
				”
			</div>
		</div>
	);
};
