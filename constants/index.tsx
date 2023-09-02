import clsx from "clsx";

export const ANIMATE = "transition-all duration-200 ease-in-out";
export const STRIKED =
	"line-through decoration-4 decoration-inherit blur-[0.05rem]";
export const HYPERLINK =
	"group underline underline-offset-4 decoration-2 hover:text-isSystemLightSecondary font-500 ";

export const LINK_ICON_BASE =
	"inline-block absolute top-0 fill-isWhite h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] mt-1 ml-1 md:ml-[0.4rem] mr-1 rounded-sm !fill-isBlack/90 bg-isLabelDarkSecondary group-hover:bg-isWhite group-hover:scale-125";

export const LINK_ICON_BASE_v2 =
	"inline-block align-top fill-isWhite mt-[0.15rem] md:mt-[0.2rem] ml-[0.2rem] md:ml-[0.25rem] mr-[0.1rem] h-[0.6rem] h-[0.6rem] md:h-[0.8rem] md:w-[0.8rem] rounded-sm group-hover:scale-125 !fill-isBlack/90 bg-isLabelDarkSecondary group-hover:bg-isWhite content-center place-content-center items-center ";

export const NEW_LINK_ICON_BASE_v3 =
	"inline-block align-top fill-isWhite mt-[0.15rem] md:mt-[0.2rem] ml-[0.2rem] md:ml-[0.25rem] mr-[0.1rem] h-[0.6rem] h-[0.6rem] md:h-[0.8rem] md:w-[0.8rem] rounded-[0.15rem] group-hover:scale-125 !fill-isBlack/90 bg-gradient-to-br from-isLabelDarkSecondary to-isLabelDarkSecondary/10 group-hover:from-isWhite group-hover:to-isLabelDarkPrimary/40 content-center place-content-center items-center group-hover:rounded-[0.2rem]";

export const NEW_LINK_ICON_BASE_v4 =
	"inline-block align-top fill-isWhite mt-[0.15rem] md:mt-[0.2rem] ml-[0.2rem] md:ml-[0.25rem] mr-[0.1rem] h-[0.6rem] h-[0.6rem] md:h-[0.8rem] md:w-[0.8rem] rounded-[0.15rem] group-hover:scale-125 !fill-isBlack/90 bg-isLabelDarkTertiary group-hover:bg-isLabelDarkPrimary content-center place-content-center items-center group-hover:rounded-[0.2rem] group-hover:-rotate-6";

export const BASE_SCREEN =
	"max-w-sm sm:max-w-sm md:max-w-3xl lg:max-w-4xl p-6 md:p-16 space-y-12 tracking-wide";

export const LINK_ICON = clsx(NEW_LINK_ICON_BASE_v4, ANIMATE, "hidden");
