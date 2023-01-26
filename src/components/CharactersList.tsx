import { ResponseData } from "@/@types/types";
import Image from "next/image";

interface CharactersListProps {
	data: ResponseData | undefined;
}

export function CharactersList({ data }: CharactersListProps) {
	return (
		<div
			className="mx-auto max-w-[1670px] w-full flex flex-wrap my-[40px] gap-4
		items-center justify-center"
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
	);
}
