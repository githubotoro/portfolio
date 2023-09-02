import clsx from "clsx";
import Image from "next/image";
import { ANIMATE } from "@/constants";
import ProjectsPreview from "@/public/assets/gifs/projects-preview.gif";
import Explosion from "@/public/assets/gifs/explosion.gif";

export const Tagline = ({ props }: { props: string }) => {
	const HIGHLIGHT = clsx("text-isWhite font-serif");
	const BLURRY = clsx("text-isSystemLightTertiary blur-[0.1rem]");

	return (
		<h1
			id="tagline"
			className={clsx(
				"font-500 rounded-2xl w-full max-w-4xl text-isSystemLightTertiary text-[2.1rem] sm:text-[3.6rem] md:text-[5.2rem] flex flex-col space-y-1 md:space-y-3 leading-none font-serif text-center items-center overflow-hidden relative",
				props
			)}
		>
			<div className="w-full h-full backdrop-blur-md space-y-2">
				<div className="flex flex-row items-center place-content-center ">
					<span className={HIGHLIGHT}>i</span>
					{/* &nbsp; */}
					{/* <span className={HIGHLIGHT}>ship</span> */}
					<span
						className={clsx(
							"z-10 relative overflow-hidden mx-2 w-[4.8rem] h-[2.4rem] md:w-[9.6rem] md:h-[4.8rem] md:mx-5 rounded-md hover:blur-none hover:scale-[1.5] hover:rotate-6 group",
							ANIMATE
						)}
					>
						<Image
							src={Explosion}
							alt="like"
							fill
							className={clsx(
								"object-cover object-bottom scale-[2.5] group-hover:scale-[1.2] bottom-0 group-hover:-rotate-6",
								ANIMATE
							)}
						/>
					</span>
					<span className={BLURRY}>ideas</span>
				</div>

				<div className="flex flex-row items-center place-content-center md:!mt-[1.6rem] ">
					<span className={BLURRY}>off the </span>&nbsp;
					<span className={HIGHLIGHT}>localhost...</span>
				</div>
				{/* <div
				className={clsx(
					"relative overflow-hidden w-full aspect-[16/4] rounded-xl md:rounded-2xl group !mt-[1.6rem] bg-isRedDark",
					ANIMATE
				)}
			>
				<Image
					src={Explosion}
					alt="goal"
					fill
					className={clsx("object-cover", ANIMATE)}
				/>
			</div> */}
			</div>
		</h1>
	);
};
