import Head from "next/head";
import Image from "next/image";
import { Pagination } from "antd";
import { api } from "@/services/axiosClient";
import { ResponseData } from "@/@types/types";
import { useQuery } from "react-query";

export default function Home() {
	const { data, error, isFetching } = useQuery("getCharacters", async () => {
		const response = await api.get<ResponseData>("api/character/?page=19");

		return response?.data;
	});

	return (
		<>
			<Head>
				<title>Rick and Morty API</title>
			</Head>

			<div className="flex flex-wrap w-full">
				<div
					className="mx-auto max-w-[1670px] w-full flex
				flex-wrap h-[800px] mt-[40px] gap-4"
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
					<Pagination total={data?.info.pages} />
				</div>
			</div>
		</>
	);
}
