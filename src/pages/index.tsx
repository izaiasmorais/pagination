import Head from "next/head";
import Image from "next/image";
import { api } from "@/services/axiosClient";
import { ResponseData } from "@/@types/types";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { Pagination } from "@mui/material";

export default function Home() {
	const [page, setPage] = useState(1);
	const queryClient = useQueryClient();

	const { data, error, isFetching } = useQuery(
		["get-characters", page],
		async () => {
			const response = await api.get<ResponseData>(
				`api/character/?page=${page}`
			);

			return response?.data;
		},
		{
			keepPreviousData: true,
		}
	);

	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
		queryClient.fetchQuery("get-characters");
		console.log(page);
	};

	return (
		<>
			<Head>
				<title>Rick and Morty API</title>
			</Head>

			<div className="flex flex-wrap w-full p-4">
				<div
					className="mx-auto max-w-[1670px] w-full flex flex-wrap my-[40px] gap-4
					"
				>
					{data?.results.map((item, index) => (
						<div
							key={index}
							className="bg-[#F1F5F9] w-[320px] h-[168px]
						flex rounded-lg overflow-hidden"
						>
							<Image
								alt={item.name}
								src={item.image}
								width={168}
								height={168}
								className=""
							/>
							<div className="p-2">
								<p className="break-all text-xl font-semibold">{item.name}</p>
								<p>Gender: {item.gender}</p>
								<p>Status: {item.status}</p>
								<p>Specie: {item.species}</p>
							</div>
						</div>
					))}
				</div>

				<div className="w-full h-10 flex items-center justify-center">
					<Pagination count={20} shape="rounded" onChange={handleChangePage} />
				</div>
			</div>
		</>
	);
}
