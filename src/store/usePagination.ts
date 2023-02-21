import { create } from "zustand";

interface PaginationStore {
	page: number;
	itemPerPage: number;
	onChangePage: (page: number) => void;
	onChangeItemsPerPage: (page: number) => void;
}

export const usePagination = create<PaginationStore>((set) => ({
	page: 1,
	itemPerPage: 10,
	onChangePage(page: number) {
		set(() => ({ page }));
	},
	onChangeItemsPerPage(page: number) {
		set(() => ({ page }));
	},
}));
