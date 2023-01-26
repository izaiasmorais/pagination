export interface ICharacter {
	id: number;
	image: string;
	name: string;
	status: string;
	species: string;
	gender: string;
}
export interface ResponseData {
	info: {
		count: number;
		next: string;
		pages: number;
		prev: number | null;
	};
	results: ICharacter[];
}
