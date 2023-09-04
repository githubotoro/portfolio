import Image from "next/image";
import { Tagline, Subtitle, Description } from "@/components/ui/Home";
import Frame from "@/public/assets/me/frame.png";
import clsx from "clsx";
import { ANIMATE, BASE_SCREEN } from "@/constants";

const HomePage = async () => {
	return (
		<>
			<Tagline props="py-16 md:py-24" />

			{/* <div className="w-full h-fit aspect-video max-w-sm sm:max-w-md md:max-w-2xl relative rounded-md overflow-hidden z-60">
				<Image
					src={Frame}
					alt="frame"
					fill
					className={clsx("object-contain w-full h-full", ANIMATE)}
				/>
				<div className="absolute top-0 w-full h-full backdrop-blur-[0.02rem]" />
			</div> */}

			<Subtitle props="mb-16 md:mb-24 -mt-12 md:-mt-16" />

			<div className={clsx(BASE_SCREEN, "-mt-4 md:-mt-8")}>
				<Description />
			</div>
		</>
	);
};

export default HomePage;
