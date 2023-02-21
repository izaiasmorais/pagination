import { create } from "zustand";

interface PaginationStore {
	page: number;
	onChangePage: (page: number) => void;
}

export const usePagination = create<PaginationStore>((set) => ({
	page: 1,
	onChangePage(page: number) {
		set(() => ({ page }));
	},
}));
