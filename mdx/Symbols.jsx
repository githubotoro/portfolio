import clsx from "clsx";

const FRONT_ADJUSTMENT = "-mb-10";
const BASE_SYMBOL = "absolute text-isSystemLightTertiary font-400";

const MAP = {
	Para: {
		token: "¶",
		classes: "-mt-3 md:-mt-6 -ml-6 md:-ml-14 !text-3xl md:!text-7xl",
	},
	Section: {
		token: "§",
		classes:
			"-mt-3 md:-mt-6 -ml-6 md:-ml-12 text-3xl md:text-7xl text-3xl md:text-7xl",
	},
	Hash: {
		token: "#",
		classes: "-mt-2 md:-mt-4 -ml-6 md:-ml-14 text-3xl md:text-7xl",
	},
	Phrase: {
		token: "&",
		classes: "-mt-2 -ml-6 md:-mt-6 md:-ml-14 text-3xl md:text-7xl",
	},
	At: {
		token: "@",
		classes: "-mt-2 -ml-7 md:-mt-4 md:-ml-[4.2rem] text-2xl md:text-6xl",
	},
	Asterisk: {
		token: "*",
		classes: "-mt-1 md:-mt-3 -ml-7 md:-ml-[3.6rem] text-5xl md:text-8xl",
	},
};

const createSymbol = ({ key, props }) => {
	return (
		<div className={clsx("relative", props.front ? FRONT_ADJUSTMENT : "")}>
			<div className={clsx(BASE_SYMBOL, MAP[key].classes)}>
				{MAP[key].token}
			</div>
		</div>
	);
};

export const Symbols = {
	Para: (props) => {
		return createSymbol({ key: "Para", props });
	},
	Section: (props) => {
		return createSymbol({ key: "Section", props });
	},
	Hash: (props) => {
		return createSymbol({ key: "Hash", props });
	},
	Phrase: (props) => {
		return createSymbol({ key: "Phrase", props });
	},
	At: (props) => {
		return createSymbol({ key: "At", props });
	},
	Asterisk: (props) => {
		return createSymbol({ key: "Asterisk", props });
	},
	Question: (props) => {
		return (
			<div className="static -mb-7 -ml-6 md:-mb-16 md:-ml-[3.3rem] text-isSystemLightTertiary top-0 left-0 text-4xl md:text-8xl font-400">
				?
			</div>
		);
	},
	StartQuotes: (props) => {
		return (
			<div className="static -mb-10 -ml-7 md:-mb-28 md:-ml-16 text-isSystemLightTertiary top-0 left-0 text-5xl md:text-9xl font-400">
				“
			</div>
		);
	},
	EndQuotes: (props) => {
		return (
			<div className="static -mt-3 -mr-7 md:-mt-8 md:-mr-16 -mb-3 md:-mb-20 text-isSystemLightTertiary bottom-0 right-0 text-5xl md:text-9xl font-400 text-right">
				”
			</div>
		);
	},
};
