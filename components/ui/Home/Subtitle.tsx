import clsx from "clsx";
import OneLiner from "@/content/home/one-liner.mdx";

export const Subtitle = ({ props }: { props: string }) => {
	return (
		<>
			<div className="flex flex-col items-center w-fit max-w-sm sm:max-w-md md:max-w-4xl relative">
				<span className="text-isLabelDarkTertiary text-center text-sm md:text-xl tracking-wide italic font-300">
					<OneLiner />
				</span>

				<div className="absolute text-isLabelDarkSecondary -top-1 -left-5 md:-top-2 md:-left-11 text-2xl md:text-6xl italic">
					“
				</div>
				<div className="absolute text-isLabelDarkSecondary top-2 -right-3 md:top-3 md:-right-7 text-2xl md:text-6xl italic">
					”
				</div>
			</div>

			<div
				className={clsx(
					"text-isSystemLightTertiary text-sm md:text-xl font-500",
					props
				)}
			>{`-- Uday Khokhariya`}</div>
		</>
	);
};
