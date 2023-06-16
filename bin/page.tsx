import Image from "next/image";
import { Home } from "@/components/ui/Home";

const HomePage = async () => {
	return (
		<>
			<style>
				{`
            .uday {
              font-size: calc(100px + (500 - 100) * ((100vw - 320px) / (2560 - 320)));
            }

            .khokhariya {
              font-size: calc(43px + (214 - 43) * ((100vw - 320px) / (2560 - 320)));
            }
          `}
			</style>

			<Home />

			{/* <div className="text-lg">hello world</div> */}

			{/* <div className=" w-full max-w-2xl h-64 flex flex-col items-center leading-none">
					<div className="uday">uday</div>
					<div className="khokhariya pt-[15px]">khokhariya</div>
				</div> */}

			{/* <div className="bg-isWhite w-full h-full min-h-[96.868365vh] rounded-3xl shadow-sm"></div> */}
		</>
	);
};

export default HomePage;
