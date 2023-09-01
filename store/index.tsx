import { create } from "zustand";

interface State {
	navtext: any;
	setNavtext: (navtext: any) => void;
	resetNavtext: () => void;
	navHighlight: any;
	setNavHighlight: (navHighlight: any) => void;
}

const BASE_TEXT = "✤ my infinite garden ✤";

export const useStore = create<State>()((set) => ({
	navtext: BASE_TEXT,
	setNavtext: (navtext: any) => set({ navtext }),
	resetNavtext: () =>
		set((state) => ({
			navtext: BASE_TEXT,
		})),
	navHighlight: false,
	setNavHighlight: (navHighlight: any) => set({ navHighlight }),
}));
