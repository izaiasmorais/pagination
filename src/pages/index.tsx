import Head from "next/head";
import { api } from "@/services/axiosClient";
import { ResponseData } from "@/@types/types";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { CharactersList } from "@/components/CharactersList";

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
	};

	return (
		<>
			<Head>
				<title>Rick and Morty API</title>
			</Head>

			<div className="flex flex-wrap w-full p-4">
				<CharactersList data={data} />

				<div className="w-full h-10 flex items-center justify-center">
					<Pagination
						count={20}
						shape="rounded"
						onChange={handleChangePage}
						className="text-xl"
					/>
				</div>
			</div>
		</>
	);
}
