import Image from "next/image";
import { Tagline, Subtitle, Description } from "@/components/ui/Home";

const HomePage = async () => {
	return (
		<>
			<Tagline props="py-16 md:py-24" />
			<Subtitle props="pb-12 md:pb-16" />
			<Description props="pb-12 pt-4 md:pt-6 px-7 md:px-16" />
		</>
	);
};

export default HomePage;
