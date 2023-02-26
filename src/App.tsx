import { items } from "./mocks/items";
import { Pagination } from "./components/Pagination";
import "./styles/global.css";
import { usePagination } from "./store/usePagination";

function App() {
	const { page, itemsPerPage, onChangePage } = usePagination();

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const displayedItems = items.slice(startIndex, endIndex);

	return (
		<div className="w-full text-xl">
			<div
				className="w-full max-w-[1000px] mx-auto mt-[200px] bg-slate-100
			p-6 rounded-lg"
			>
				<h1 className="mb-6">Pagination System</h1>

				<ul className="grid gap-2 mb-10">
					{displayedItems.map((item) => (
						<li
							key={item.id}
							className="bg-slate-200 p-2 rounded
						hover:bg-slate-300 transition-colors cursor-pointer"
						>
							{item.name}
						</li>
					))}
				</ul>

				<div className="flex justify-between">
					<Pagination
						totalItems={items.length}
						itemsPerPage={itemsPerPage}
						currentPage={page}
						onChangePage={onChangePage}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
