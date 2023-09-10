import "./globals.css";
import { Signika, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import { Navbar } from "@/components/ui/Navbar";
import { RightBar } from "@/components/ui/Sidebars";

const signika = Signika({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	style: ["normal"],
	variable: "--font-signika",
});

const belgantAesthetic = localFont({
	src: "../public/assets/fonts/belgant-aesthetic.otf",
	display: "swap",
	variable: "--font-belgant-aesthetic",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	style: ["normal"],
	variable: "--font-space-grotesk",
});

export const metadata = {
	title: {
		default: "Uday Khokhariya",
		template: "%s | Uday Khokhariya",
	},
	description:
		"I am Uday & this is me on the internet. I'm a web3 developer who helps in getting stuff off the localhost.",
	openGraph: {
		title: "Uday Khokhariya",
		description:
			"I am Uday & this is me on the internet. I'm a web3 developer who helps in getting stuff off the localhost.",
		url: "https://yupuday.dev",
		siteName: "Uday Khokhariya",
		images: [
			{
				url: "",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Uday Khokhariya",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.ico",
	},
	verification: {
		google: "",
		yandex: "",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-p-12 md:scroll-p-20 ">
			<body
				className={clsx(
					signika.variable,
					belgantAesthetic.variable,
					spaceGrotesk.variable,
					"font-sans font-400 text-md bg-isBlack/90 text-isLabelDarkSecondary/50 w-full min-h-screen flex flex-col items-center antialiased no-scrollbar "
				)}
			>
				<Navbar />

				<div
					id="mainContainer"
					className="z-0 w-full max-w-screen-md p-2 flex flex-col items-center min-h-screen font-300 text-sm sm:text-md md:text-lg"
				>
					{children}
				</div>

				{/* SIDEBARS */}
				{/* <div className="hidden xl:flex max-w-screen-xl flex-row w-full h-screen fixed pointer-events-none">
					<div className="w-[256px]"></div>
					<div className="w-full max-w-screen-md"></div>

					<RightBar />
				</div> */}
				{/* SIDEBARS */}

				{/* <div className="font-serif w-full h-[15vw] flex flex-col items-center text-[35vw] font-700 text-isWhite text-center overflow-hidden leading-none blur-[0.2rem] md:blur-[0.25rem]">
					UDAY
				</div> */}

				{/* <div className="fixed z-30 top-0 left-0 w-full h-full vignette" /> */}

				{/* <div
					id="grains"
					className="z-50 animated-grains fixed bg-opacity-50 isolate pointer-events-none bg-[url('/assets/grains.png')] backdrop-blur-[0.03rem]"
				/> */}

				{/* <div
					id="grains2"
					className="z-50 animated-grains fixed bg-opacity-50 isolate pointer-events-none bg-[url('/assets/grains.png')] w-full h-full backdrop-blur-[0.03rem]"
				/> */}

				<div className="fixed z-30 top-0 h-2/5 bg-gradient-to-b from-isBlack to-transparent bg-opacity-50 w-full pointer-events-none" />
				<div className="fixed z-50 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-isBlack bg-opacity-50 w-full pointer-events-none" />

				{/* <div className="fixed bg-no-repeat bg-cover -z-10 top-0 h-full bg-[url('/assets/me/buildspace.png')] object-contain opacity-40 bg-center blur-xl w-full pointer-events-none" /> */}

				{/* <div className="fixed z-50 top-0 h-full bg-[url('/assets/gifs/explosion.gif')] object-contain opacity-5 blur-xl w-full pointer-events-none" /> */}
			</body>
		</html>
	);
}