import { usePagination } from "../store/usePagination";
import { Button } from "./Button";
import { CaretRight, CaretLeft } from "phosphor-react";

interface PaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
}

export function Pagination({
	totalItems,
	itemsPerPage,
	currentPage,
}: PaginationProps) {
	const { onChangePage, page } = usePagination();

	const totalPages = Math.ceil(totalItems / itemsPerPage);

	let startPage, endPage;

	if (totalPages <= 6) {
		startPage = 1;
		endPage = totalPages;
	} else if (currentPage <= 4) {
		startPage = 1;
		endPage = 6;
	} else if (currentPage >= totalPages - 3) {
		startPage = totalPages - 5;
		endPage = totalPages;
	} else {
		startPage = currentPage - 2;
		endPage = currentPage + 2;
	}

	const pageButtons = [];

	for (let i = startPage; i <= endPage; i++) {
		pageButtons.push(i);
	}

	function handleClick(pageNumber: number) {
		if (pageNumber === 0) return;

		if (pageNumber > totalPages) return;

		onChangePage(pageNumber);
	}

	return (
		<div className="flex w-full justify-between">
			<div className="flex gap-2">
				{page >= 1 && (
					<Button onClick={() => handleClick(page - 1)}>
						<CaretLeft size={20} />
					</Button>
				)}

				{startPage > 1 && <Button onClick={() => handleClick(1)}>1</Button>}

				{startPage > 2 && <span>...</span>}

				{pageButtons.map((pageNumber) => (
					<Button
						key={pageNumber}
						onClick={() => handleClick(pageNumber)}
						disabled={pageNumber === page}
						className="bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded
						cursor-pointer text-lg font-medium disabled:bg-purple-500
						disabled:hover:bg-purple-600 disabled:text-white"
					>
						{pageNumber}
					</Button>
				))}

				{endPage < totalPages - 1 && <span>...</span>}

				{endPage < totalPages && (
					<Button onClick={() => handleClick(totalPages)}>{totalPages}</Button>
				)}

				{currentPage <= totalPages && (
					<Button onClick={() => handleClick(page + 1)}>
						<CaretRight size={20} />
					</Button>
				)}
			</div>

			<div>
				Página: {page} / {totalPages}
			</div>
		</div>
	);
}
