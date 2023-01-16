import { MagnifyingGlass } from 'phosphor-react';

import { BellIcon, UserIcon } from '@heroicons/react/24/solid';
import { Icon } from '@tremor/react';

export function Header() {
  return (
    <header
      className="bg-white w-[1500px] mx-auto h-[64px]
		shadow-sm rounded-2xl p-4 flex justify-between items-center"
    >
      <div
        className="flex items-center gap-2 bg-background
			rounded-2xl pr-4"
      >
        <input
          type="text"
          placeholder="Pesquisar"
          className="outline-none	bg-background p-2 rounded-2xl pl-4"
        />
        <div>
          <MagnifyingGlass size={20} />
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <Icon icon={BellIcon} color="slate" />
        <Icon icon={UserIcon} color="slate" />
      </div>
    </header>
  );
}
