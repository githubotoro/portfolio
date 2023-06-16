import clsx from "clsx";
import Image from "next/image";
import { ANIMATE } from "@/constants";
import Goal from "@/public/assets/me/goal.webp";
import Like from "@/public/assets/me/like.webp";
import High from "@/public/assets/me/high.webp";

export const Tagline = ({ props }: { props: string }) => {
	return (
		<h1
			id="tagline"
			className={clsx(
				"font-500 rounded-2xl w-full max-w-4xl text-isSystemLightTertiary text-[2.1rem] sm:text-[3.6rem] md:text-[5.2rem] flex flex-col space-y-1 md:space-y-3 leading-none font-serif text-center",
				props
			)}
		>
			<div className="flex flex-row items-center place-content-center">
				<span className="blur-[0.1rem]">The</span>&nbsp;
				<span className="text-isWhite">goal</span>
				<span
					className={clsx(
						"relative overflow-hidden w-[2.3rem] h-[3.2rem] md:w-[4.3rem] md:h-[6.2rem] mx-2 md:mx-5 rounded-xl md:rounded-2xl hover:scale-[1.5] hover:-rotate-6 group object-bottom",
						ANIMATE
					)}
				>
					<Image
						src={Goal}
						alt="goal"
						fill
						className={clsx(
							"object-cover scale-[2.1] group-hover:scale-[1.1] ",
							ANIMATE
						)}
					/>
				</span>
				<span className="blur-[0.1rem]">{` is to`}</span>&nbsp;
				<span className="text-isWhite">go</span>
			</div>
			<div className="flex flex-row items-center place-content-center md:!mt-[1.6rem]">
				<span className="blur-[0.1rem]">like</span>
				<span
					className={clsx(
						"relative overflow-hidden mx-2 rounded-xl w-[2.4rem] h-[2.4rem] md:w-[4.8rem] md:h-[4.8rem] md:mx-5 md:rounded-2xl hover:blur-none hover:scale-[1.5] hover:rotate-6 group ",
						ANIMATE
					)}
				>
					<Image
						src={Like}
						alt="like"
						fill
						className={clsx(
							"object-cover object-bottom scale-[2.1] group-hover:scale-[1.1] bottom-0",
							ANIMATE
						)}
					/>
				</span>
				<span className="blur-[0.1rem]">Willie Nelson,</span>
			</div>
			<div className="flex flex-row items-center place-content-center text-isWhite">
				<span className="blur-[0.1rem]">on&nbsp;a&nbsp;</span>
				<span className="text-isWhite">high...</span>
				<span
					className={clsx(
						"relative overflow-hidden w-[4.5rem] h-[2.5rem] md:w-[9.2rem] md:h-[5.6rem] mx-2 md:mx-5 rounded-lg md:rounded-2xl hover:scale-[1.5] hover:-rotate-6 group",
						ANIMATE
					)}
				>
					<Image
						src={High}
						alt="high"
						fill
						className={clsx(
							"object-cover scale-[2.1] group-hover:scale-[1.1]",
							ANIMATE
						)}
					/>
				</span>
			</div>
		</h1>
	);
};
