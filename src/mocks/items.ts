import { Item } from "../@types/types";

export const items: Item[] = [];

for (let i = 1; i <= 100; i++) {
	const item: Item = {
		id: i,
		name: `Item ${i}`,
	};
	items.push(item);
}
