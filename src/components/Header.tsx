import { Icon } from '@tremor/react';
import { MagnifyingGlass } from 'phosphor-react';

export function Header() {
  return (
    <header
      className="bg-white w-[1500px] mx-auto h-[64px]
		shadow-sm rounded-2xl p-4 flex justify-between items-center"
    >
      <div
        className="flex items-center gap-2 w-[240px] bg-background
			rounded-2xl"
      >
        <input
          type="text"
          placeholder="Pesquisar"
          className="outline-none	bg-background p-2 rounded-2xl"
        />
        <div>
          <Icon icon={MagnifyingGlass} size={'lg'} />
        </div>
      </div>
    </header>
  );
}
