import { Button } from "./Button";
import { CaretRight, CaretLeft } from "phosphor-react";

interface PaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onChangePage: (page: number) => void;
}

export function Pagination({
	totalItems,
	itemsPerPage,
	currentPage,
	onChangePage,
}: PaginationProps) {
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
				{currentPage >= 1 && (
					<Button onClick={() => handleClick(currentPage - 1)}>
						<CaretLeft size={20} />
					</Button>
				)}

				{startPage > 1 && <Button onClick={() => handleClick(1)}>1</Button>}

				{startPage > 2 && <span>...</span>}

				{pageButtons.map((pageNumber) => (
					<Button
						key={pageNumber}
						onClick={() => handleClick(pageNumber)}
						disabled={pageNumber === currentPage}
						extraStyle="disabled:bg-purple-500 disabled:hover:bg-purple-600 disabled:text-white"
					>
						{pageNumber}
					</Button>
				))}

				{endPage < totalPages - 1 && <span>...</span>}

				{endPage < totalPages && (
					<Button onClick={() => handleClick(totalPages)}>{totalPages}</Button>
				)}

				{currentPage <= totalPages && (
					<Button
						onClick={() => handleClick(currentPage + 1)}
						disabled={currentPage === totalItems ? true : false}
						extraStyle="disabled:bg-red-500"
					>
						<CaretRight size={20} />
					</Button>
				)}
			</div>

			<div>
				Página: {currentPage} / {totalPages}
			</div>
		</div>
	);
}
