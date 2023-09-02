import {
	PersonCropCircleBadgeFill,
	MagazineFill,
	EllipsisBubbleFill,
	Gmail,
	Twitter,
	Linkedin,
} from "@/components/icons";
import clsx from "clsx";

export const NAV_ITEMS = {
	home: {
		icon: PersonCropCircleBadgeFill,
		navigate_to: "/",
		navtext: "home sweet home",
	},
	blogs: {
		icon: MagazineFill,
		navigate_to: "/blogs",
		navtext: "yeah yeah, i write sometimes",
	},
	contact: {
		icon: EllipsisBubbleFill,
		navigate_to: "/contact",
		navtext: "what's your emergency?",
	},
};

export const SOCIAL_ITEMS = {
	gmail: {
		icon: Gmail,
		navigate_to: "mailto:uday.khokhariya@gmail.com",
		props: "fill-isSystemDarkTertiary hover:fill-isRedDark",
		navtext: "uday.khokhariya@gmail.com",
	},
	linkedin: {
		icon: Linkedin,
		navigate_to: "https://www.linkedin.com/in/yupuday/",
		props: "fill-isSystemDarkTertiary hover:fill-isBlueDark",
		navtext: "linkedin.com/in/yupuday",
	},
	twitter: {
		icon: Twitter,
		navigate_to: "/",
		props: "fill-isSystemDarkTertiary hover:fill-isCyanLight !-ml-[0.15rem] !p-[0.25rem] sm:!p-[0.3rem] md:!p-[0.35rem]",
		navtext: "https://twitter.com/@yupuday",
	},
};
