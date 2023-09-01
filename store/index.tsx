import { create } from "zustand";

interface State {
	navtext: string;
	setNavtext: (navtext: string) => void;
	navHighlight: boolean;
	setNavHighlight: (navHighlight: boolean) => void;
}

const BASE_TEXT = "✤ my infinite garden ✤";

export const useStore = create<State>()((set) => ({
	navtext: BASE_TEXT,
	setNavtext: (navtext: string) => set({ navtext }),
	resetNavtext: () =>
		set((state) => ({
			navtext: BASE_TEXT,
		})),
	navHighlight: false,
	setNavHighlight: (navHighlight: boolean) => set({ navHighlight }),
}));
