import { Layout } from "@/components/Layout";
import { api } from "@/services/axiosClient";
import { Card, Text } from "@tremor/react";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";

interface ICharacter {
	id: number;
	image: string;
	name: string;
}

interface ResponseData {
	info: {
		count: number;
		next: string;
		pages: number;
		prev: number | null;
	};
	results: ICharacter[];
}

export default function Home() {
	const { data, error, isFetching } = useQuery("getCharacters", async () => {
		const response = await api.get<ResponseData>("api/character");

		return response?.data;
	});

	console.log(data?.results);

	return (
		<>
			<Head>
				<title>API Playground</title>
			</Head>
			<Layout>
				<div className="flex flex-wrap w-full">
					{data?.results.map((item, index) => (
						<div key={index} className="bg-white p-4 max-w-[200px]">
							<Image
								alt={item.name}
								src={item.image}
								width={168}
								height={168}
								className=""
							/>
							<p>{item.name}</p>
						</div>
					))}
				</div>
			</Layout>
		</>
	);
}
